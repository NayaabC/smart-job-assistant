interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  const navigationItems = [
    { id: 'jobs', label: 'Jobs', icon: '💼', isActive: activeTab === 'jobs' },
    { id: 'resume', label: 'Resume', icon: '📄', isActive: activeTab === 'resume', hasCheckmark: true },
    { id: 'profile', label: 'Profile', icon: '👤', isActive: activeTab === 'profile' },
    { id: 'agent', label: 'Agent Beta', icon: '🤖', isActive: activeTab === 'agent' }
  ];

  const engagementItems = [
    { id: 'refer', label: 'Refer & Earn', icon: '🎁', description: 'Invite friends or share on LinkedIn to earn extra rewards!' },
    { id: 'messages', label: 'Messages', icon: '💬' },
    { id: 'download', label: 'Download App', icon: '📱' },
    { id: 'feedback', label: 'Feedback', icon: '💭' },
    { id: 'settings', label: 'Settings', icon: '⚙️' }
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen overflow-y-auto">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-blue-600">Jobright</h1>
      </div>

      {/* Main Navigation */}
      <div className="p-4">
        <nav className="space-y-2">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                item.isActive
                  ? 'bg-blue-50 text-blue-700 border border-blue-200'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
              {item.hasCheckmark && (
                <span className="ml-auto text-green-500">✓</span>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Refer & Earn Section */}
      <div className="p-4 border-t border-gray-100">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-lg">🎁</span>
            <span className="font-semibold text-gray-900">Refer & Earn</span>
          </div>
          <p className="text-sm text-gray-600">
            Invite friends or share on LinkedIn to earn extra rewards!
          </p>
          <button className="mt-3 w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
            Get Started
          </button>
        </div>
      </div>

      {/* Additional Actions */}
      <div className="p-4 border-t border-gray-100">
        <div className="space-y-2">
          {engagementItems.slice(1).map((item) => (
            <button
              key={item.id}
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
