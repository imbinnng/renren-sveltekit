import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--renren-bg)' }}>
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex gap-6">
          {/* 左侧导航栏 */}
          <div className="w-64 hidden lg:block">
            <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
              <nav className="space-y-1">
                <button 
                  className="w-full text-left px-3 py-2 rounded flex items-center space-x-2" 
                  style={{ backgroundColor: 'var(--renren-blue)', color: 'white' }}
                >
                  <span>🏠</span>
                  <span>首页</span>
                </button>
                <a href="/friends" className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 flex items-center space-x-2 block">
                  <span>👥</span>
                  <span>好友</span>
                </a>
                <a href="/albums" className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 flex items-center space-x-2 block">
                  <span>📷</span>
                  <span>相册</span>
                </a>
                <a href="/blogs" className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 flex items-center space-x-2 block">
                  <span>📝</span>
                  <span>日志</span>
                </a>
                <a href="/share" className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 flex items-center space-x-2 block">
                  <span>🔄</span>
                  <span>分享</span>
                </a>
              </nav>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold mb-3">应用</h3>
              <div className="grid grid-cols-2 gap-2">
                <button className="text-xs p-2 h-auto bg-white border border-gray-200 rounded hover:bg-gray-50">🚗 抢车位</button>
                <button className="text-xs p-2 h-auto bg-white border border-gray-200 rounded hover:bg-gray-50">💰 朋友买卖</button>
                <button className="text-xs p-2 h-auto bg-white border border-gray-200 rounded hover:bg-gray-50">🌾 天天农场</button>
                <button className="text-xs p-2 h-auto bg-white border border-gray-200 rounded hover:bg-gray-50">🐄 阳光牧场</button>
              </div>
            </div>
          </div>

          {/* 中间主内容区 */}
          <div className="flex-1">
            <div className="space-y-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-lg font-semibold mb-4">分享你的新鲜事...</h2>
                <textarea
                  placeholder="说点什么吧..."
                  className="w-full p-3 border rounded-lg"
                  style={{ borderColor: 'var(--renren-border)' }}
                  rows={4}
                />
                <div className="flex justify-end mt-4">
                  <button 
                    className="px-6 py-2 rounded-lg text-white"
                    style={{ backgroundColor: 'var(--renren-blue)' }}
                  >
                    发布
                  </button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold mb-4">动态列表</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">张</div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">张小明</div>
                      <div className="text-xs text-gray-500">@zhangxiaoming</div>
                      <div className="text-gray-800 mb-4">
                        今天天气真好，心情也格外美丽！分享一下工作中的小确幸，希望大家都开开心心~ ☀️
                      </div>
                      <div className="flex items-center space-x-6">
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500">
                          <span>❤️</span>
                          <span>42</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500">
                          <span>💬</span>
                          <span>8</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-green-500">
                          <span>🔄</span>
                          <span>2</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧边栏 */}
          <div className="w-64 hidden xl:block">
            <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
              <h3 className="font-bold">热门应用</h3>
              <div className="space-y-2">
                <a href="/albums" className="block text-sm hover:underline text-blue-600">抢车位</a>
                <a href="/" className="block text-sm hover:underline text-blue-600">朋友买卖</a>
                <a href="/" className="block text-sm hover:underline text-blue-600">天天农场</a>
                <a href="/" className="block text-sm hover:underline text-blue-600">阳光牧场</a>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold mb-3">可能认识的人</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">王</div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">王小明</div>
                    <div className="text-xs text-gray-500">5个共同好友</div>
                  </div>
                  <button 
                    className="px-3 py-1 rounded text-sm bg-blue-600 hover:bg-blue-700 text-white"
                  >加好友</button>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">李</div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">李美丽</div>
                    <div className="text-xs text-gray-500">3个共同好友</div>
                  </div>
                  <button 
                    className="px-3 py-1 rounded text-sm bg-blue-600 hover:bg-blue-700 text-white"
                  >加好友</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;