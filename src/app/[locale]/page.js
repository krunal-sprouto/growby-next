const page = () => {
    return (
        <div className="min-h-screen bg-gray-900">
      <Sidebar 
        collapsed={collapsed} 
        setCollapsed={setCollapsed}
        currentPath={currentPath}
      />
      <div className={`transition-all duration-200 ${collapsed ? 'ml-16' : 'ml-64'}`}>
        <Topbar />
        <Dashboard />
      </div>
    </div>
    )
}