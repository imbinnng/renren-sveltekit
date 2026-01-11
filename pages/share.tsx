import React, { useState } from 'react';

const SharePage: React.FC = () => {
  const [shareItems] = useState([
    {
      id: 1,
      author: '张小明',
      avatar: '张',
      content: '今天天气真好，在公园里散步，感受春天的气息！🌸',
      imageUrl: 'https://picsum.photos/seed/share1/600/400.jpg',
      likes: 23,
      comments: 5,
      shares: 2,
      createdAt: '2小时前'
    },
    {
      id: 2,
      author: '李小红',
      avatar: '李',
      content: '周末去了趟郊外，发现了一家很棒的咖啡店，推荐给大家！☕ 环境很宜人，适合工作学习~ 📚',
      imageUrl: 'https://picsum.photos/seed/share2/600/400.jpg',
      likes: 45,
      comments: 12,
      shares: 8,
      createdAt: '3小时前'
    },
    {
      id: 3,
      author: '王大伟',
      avatar: '王',
      content: '刚完成一个有挑战性的项目，虽然过程很辛苦，但收获满满！感谢团队的支持和信任！💪',
      imageUrl: 'https://picsum.photos/seed/share3/600/400.jpg',
      likes: 88,
      comments: 23,
      shares: 15,
      createdAt: '4小时前'
    }
  ]);

  const commonEmojis = ['😊', '😂', '❤️', '👍', '🎉', '🔥', '💯', '🎁', '🌟', '✨', '🎨', '🎭'];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--renren-bg)' }}>
      <header className="bg-white border-b border-gray-200" style={{ borderColor: 'var(--renren-border)' }}>
        <div className="max-w-6xl mx-auto p-4">
          <div className="flex items-center space-x-4">
            <a href="/" className="text-blue-600 hover:text-blue-800 font-medium">
              ← 返回首页
            </a>
            <h1 className="text-2xl font-bold" style={{ color: '#111827' }}>
              🔄 分享新鲜事
            </h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">{shareItems.length} 条分享</span>
              <select className="px-3 py-2 border border-gray-200 rounded-lg" style={{ borderColor: 'var(--renren-border)' }}>
                <option value="all">全部</option>
                <option value="life">生活</option>
                <option value="work">工作</option>
                <option value="study">学习</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="text-lg font-semibold mb-4" style={{ color: '#111827' }}>
                发布新鲜事
              </div>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="标题"
                  className="w-full p-3 border rounded-lg"
                  style={{ borderColor: 'var(--renren-border)' }}
                />
                <textarea
                  placeholder="分享你的新鲜事..."
                  className="w-full p-3 border rounded-lg resize-none"
                  style={{ borderColor: 'var(--renren-border)' }}
                  rows={4}
                />
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="图片URL(可选)"
                    className="flex-1 p-3 border rounded-lg"
                    style={{ borderColor: 'var(--renren-border)' }}
                  />
                  <select className="px-3 py-2 border rounded-lg" style={{ borderColor: 'var(--renren-border)' }}>
                    <option value="text">文字</option>
                    <option value="image">图片</option>
                    <option value="video">视频</option>
                    <option value="link">链接</option>
                  </select>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">类型：</span>
                  <select className="px-3 py-2 border rounded-lg" style={{ borderColor: 'var(--renren-border)' }}>
                    <option value="life">生活</option>
                    <option value="work">工作</option>
                    <option value="study">学习</option>
                  </select>
                </div>
                
                <div>
                  <div className="text-sm text-gray-600 mb-2">添加表情符号：</div>
                  <div className="grid grid-cols-8 gap-2">
                    {commonEmojis.map((emoji, index) => (
                      <button
                        key={index}
                        type="button"
                        className="p-2 hover:bg-gray-100 rounded text-lg transition-colors"
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">0/500</span>
                  <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium">
                    发布分享
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="space-y-4">
              <h2 className="text-xl font-bold mb-6" style={{ color: '#111827' }}>
                最新分享
              </h2>
              <div className="space-y-4">
                {shareItems.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg border border-gray-200 p-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                        {item.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-semibold">{item.author}</h4>
                          <span className="text-sm text-gray-500">{item.createdAt}</span>
                        </div>
                      </div>
                    </div>
                    
                    {item.imageUrl && (
                      <div className="w-full h-48 rounded-lg overflow-hidden mb-3">
                        <img 
                          src={item.imageUrl} 
                          alt={item.content}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    
                    <p className="text-gray-800 leading-relaxed mb-4">
                      {item.content}
                    </p>
                    
                    <div className="flex items-center space-x-6">
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500">
                        <span>❤️</span>
                        <span>{item.likes}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500">
                        <span>💬</span>
                        <span>{item.comments}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-green-500">
                        <span>🔄</span>
                        <span>{item.shares}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharePage;