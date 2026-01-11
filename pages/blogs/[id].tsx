import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../../src/components/Header';
import { Card, CardContent } from '../../src/components/ui/card';
import { Avatar, AvatarFallback } from '../../src/components/ui/avatar';
import PageHeader from '../../src/components/PageHeader';
import { blogData } from '../../src/lib/blogData';

const BlogDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [mounted, setMounted] = useState(false);
  const [blog, setBlog] = useState<any>(null);
  const [comments, setComments] = useState<Array<{author: string, content: string, time: string}>>([]);
  const [newComment, setNewComment] = useState('');
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (id) {
      const blogId = parseInt(id as string);
      const selectedBlog = blogData[blogId as keyof typeof blogData];
      if (selectedBlog) {
        setBlog(selectedBlog);
        setLikeCount(selectedBlog.likes);
        
        // 模拟评论数据
        setComments([
          {
            author: '技术爱好者',
            content: '写得很详细，对我的学习很有帮助！',
            time: '2小时前'
          },
          {
            author: '前端新手',
            content: '感谢分享，期待更多这样的文章。',
            time: '5小时前'
          }
        ]);
      }
    }
  }, [id]);

  const handleLike = () => {
    if (!isLiked) {
      setLikeCount(prev => prev + 1);
      setIsLiked(true);
    } else {
      setLikeCount(prev => prev - 1);
      setIsLiked(false);
    }
  };

  const handleComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment = {
        author: '我',
        content: newComment,
        time: '刚刚'
      };
      setComments(prev => [comment, ...prev]);
      setNewComment('');
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      '技术': 'bg-blue-100 text-blue-600',
      '工作': 'bg-green-100 text-green-600',
      '生活': 'bg-yellow-100 text-yellow-600',
      '美食': 'bg-red-100 text-red-600',
      '读书': 'bg-purple-100 text-purple-600',
      '旅行': 'bg-indigo-100 text-indigo-600',
      '娱乐': 'bg-pink-100 text-pink-600',
      '运动': 'bg-orange-100 text-orange-600',
      '摄影': 'bg-teal-100 text-teal-600'
    };
    return colors[category] || 'bg-gray-100 text-gray-600';
  };

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--renren-bg)' }}>
        <div>加载中...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--renren-bg)' }}>
      <Header currentPage="blogs" />
      
      <div className="max-w-4xl mx-auto p-4">
        <div className="mb-6">
          <button 
            onClick={() => router.back()}
            className="text-blue-600 hover:text-blue-800 flex items-center space-x-2"
          >
            <span>← 返回博客列表</span>
          </button>
        </div>

        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className={`px-3 py-1 rounded text-sm ${getCategoryColor(blog.category)}`}>
                {blog.category}
              </span>
              <span className="text-sm text-gray-500">{blog.createdAt}</span>
            </div>
            
            <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
            
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <Avatar className="w-10 h-10">
                  <AvatarFallback className={`bg-gradient-to-br ${blog.author.avatarColor} text-white`}>
                    {blog.author.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">{blog.author.name}</div>
                  <div className="text-sm text-gray-500">阅读时间: {blog.readTime}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <button 
                  onClick={handleLike}
                  className={`flex items-center space-x-1 ${isLiked ? 'text-red-600' : 'text-gray-600'}`}
                >
                  <span>{isLiked ? '❤️' : '🤍'}</span>
                  <span>{mounted ? likeCount : '---'}</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-600">
                  <span>💬</span>
                  <span>{comments.length}</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-600">
                  <span>🔄</span>
                  <span>{mounted ? blog.shares : '---'}</span>
                </button>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag: string, index: number) => (
                  <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="prose max-w-none">
              {blog.content.split('\n').map((paragraph: string, index: number) => (
                <p key={index} className="mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 评论区域 */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">评论 ({comments.length})</h3>
            
            {/* 发表评论表单 */}
            <form onSubmit={handleComment} className="mb-6">
              <div className="flex space-x-3">
                <Avatar className="w-10 h-10">
                  <AvatarFallback className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                    我
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="写下你的评论..."
                    className="w-full p-3 border rounded-lg resize-none"
                    rows={3}
                    style={{ borderColor: 'var(--renren-border)' }}
                  />
                  <div className="flex justify-end mt-2">
                    <button 
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      发表评论
                    </button>
                  </div>
                </div>
              </div>
            </form>
            
            {/* 评论列表 */}
            <div className="space-y-4">
              {comments.map((comment, index) => (
                <div key={index} className="flex space-x-3">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-gradient-to-br from-gray-400 to-gray-500 text-white text-sm">
                      {comment.author[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-semibold text-sm">{comment.author}</span>
                      <span className="text-xs text-gray-500">{comment.time}</span>
                    </div>
                    <p className="text-gray-700">{comment.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BlogDetailPage;