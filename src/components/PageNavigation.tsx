
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSettings } from '@/contexts/SettingsContext';
import { Button } from '@/components/ui/button';
import { Home, Package, ShoppingCart, LayoutGrid, Users, User, Calendar, ListTodo, BookOpen, Settings, ChefHat, Utensils } from 'lucide-react';

const PageNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { settings } = useSettings();
  
  // Function to determine if a route is active
  const isActive = (route: string) => {
    if (route === '/home' && (location.pathname === '/' || location.pathname === '/home')) return true;
    return location.pathname.startsWith(route);
  };

  // Map of available navigation items with their icons and routes
  const navIconMap = {
    home: { icon: Home, route: '/home' },
    pantry: { icon: Package, route: '/pantry' },
    shopping: { icon: ShoppingCart, route: '/shopping' },
    spaces: { icon: LayoutGrid, route: '/spaces' },
    family: { icon: Users, route: '/family' },
    calendar: { icon: Calendar, route: '/calendar' },
    tasks: { icon: ListTodo, route: '/tasks' },
    notes: { icon: BookOpen, route: '/notes' },
    settings: { icon: Settings, route: '/settings' },
    services: { icon: ChefHat, route: '/services' }, // Rent Chef
    recipes: { icon: Utensils, route: '/recipes' }, // Recipes
  };

  // Get navigation items from settings or use default
  const navItems = Array.isArray(settings?.navItems) 
    ? settings.navItems 
    : ['home', 'pantry', 'shopping', 'spaces', 'family'];

  // Render the icon for a specific navigation item
  const renderNavIcon = (item: string) => {
    const navItem = navIconMap[item as keyof typeof navIconMap];
    if (!navItem) return null;

    const IconComponent = navItem.icon;
    const active = isActive(navItem.route);
    
    return (
      <IconComponent 
        size={24} 
        className={active ? "text-[#586b4d]" : "text-[#6a798f]"}
      />
    );
  };

  // Handle navigation
  const handleNavigation = (item: string) => {
    const navItem = navIconMap[item as keyof typeof navIconMap];
    if (navItem) {
      navigate(navItem.route);
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-lg px-6 py-3 w-[80%] max-w-sm border border-[#f3f3e3]/20 transition-all duration-300 hover:shadow-xl z-40">
      <div className="flex justify-around items-center">
        {/* Show up to 4 navigation items based on settings */}
        {navItems.slice(0, 4).map((item, index) => (
          <Button 
            key={index}
            variant="ghost" 
            className={`p-2 h-auto w-14 hover:bg-[#f3f3e3] rounded-full transition-all duration-300 ${
              isActive(navIconMap[item as keyof typeof navIconMap]?.route || '') ? 'bg-[#f3f3e3]' : ''
            }`}
            onClick={() => handleNavigation(item)}
          >
            {renderNavIcon(item)}
          </Button>
        ))}
        
        {/* Profile button is always shown on the right */}
        <Button 
          variant="ghost" 
          className={`p-2 h-auto w-14 hover:bg-[#f3f3e3] rounded-full transition-all duration-300 ${
            isActive('/profile') ? 'bg-[#f3f3e3]' : ''
          }`}
          onClick={() => navigate('/profile')}
        >
          <div className="w-8 h-8 rounded-full bg-[#f3f3e3] flex items-center justify-center text-sm font-medium text-[#586b4d]">
            <User size={20} className={isActive('/profile') ? "text-[#586b4d]" : "text-[#6a798f]"} />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default PageNavigation;
