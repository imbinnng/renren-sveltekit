import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '../src/components/ui/card';
import Button from '../src/components/ui/button';
import Header from '../src/components/Header';
import PageHeader from '../src/components/PageHeader';
import { blogs } from '../src/lib/blogData';

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

const BlogsPage: React.FC = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--renren-bg)' }}>
      <Header 
        currentPage="blogs"
      />
      
      <div className="max-w-6xl mx-auto p-4">
        <PageHeader
          title={`最新日志 (${blogs.length})`}
          actions={
            <div className="flex items-center space-x-2">
              <div className="flex space-x-2 items-center">
                <span className="text-sm text-gray-500">分类：</span>
                <select className="px-3 py-1 border border-gray-200 rounded" style={{ borderColor: 'var(--renren-border)' }}>
                  <option value="">全部分类</option>
                  <option value="技术">技术</option>
                  <option value="生活">生活</option>
                  <option value="娱乐">娱乐</option>
                  <option value="美食">美食</option>
                  <option value="旅行">旅行</option>
                  <option value="读书">读书</option>
                  <option value="摄影">摄影</option>
                </select>
              </div>
              <input
                type="text"
                placeholder="搜索日志..."
                className="px-3 py-1 border border-gray-200 rounded"
                style={{ borderColor: 'var(--renren-border)' }}
              />
            </div>
          }
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog, index) => (
            <Card key={index} className="renren-card hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2 py-1 rounded text-xs ${getCategoryColor(blog.category)}`}>
                    {blog.category}
                  </span>
                  <span className="text-xs text-gray-500">{blog.createdAt}</span>
                </div>
                <CardTitle className="text-lg line-clamp-1 mb-2">{blog.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 mb-3 line-clamp-2">{blog.content.substring(0, 100)}...</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>👍 {blog.likes}</span>
                    <span>💬 {blog.comments}</span>
                    <span>🔄 {blog.shares}</span>
                    <span>⏱️ {blog.readTime}</span>
                  </div>
                  <Link href={`/blogs/${index + 1}`}>
                    <Button size="sm" className="text-xs">
                      阅读
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;