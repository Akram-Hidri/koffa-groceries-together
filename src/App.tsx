
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';
import { AuthProvider } from '@/contexts/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';
import { SettingsProvider } from '@/contexts/SettingsContext';
import PageLayout from '@/components/PageLayout';

// Public pages
import Index from '@/pages/Index';
import NotFound from '@/pages/NotFound';
import AuthPage from '@/pages/auth/AuthPage';
import SignupPage from '@/pages/SignupPage';
import SplashScreen from '@/pages/SplashScreen';

// Protected pages
import HomePage from '@/pages/HomePage';
import CreateFamilyPage from '@/pages/CreateFamilyPage';
import FamilyPage from '@/pages/FamilyPage';
import FamilyInvitationsPage from '@/pages/FamilyInvitationsPage';
import MemberPage from '@/pages/MemberPage';
import ProfilePage from '@/pages/ProfilePage';

// Features
import SpacesPage from '@/pages/spaces/SpacesPage';
import SpaceDetailPage from '@/pages/spaces/SpaceDetailPage';
import PantryPage from '@/pages/pantry/PantryPage';
import AddPantryItemPage from '@/pages/pantry/AddPantryItemPage';
import ShoppingListsPage from '@/pages/shopping/ShoppingListsPage';
import ShoppingListDetailPage from '@/pages/shopping/ShoppingListDetailPage';
import CalendarPage from '@/pages/calendar/CalendarPage';
import TasksPage from '@/pages/tasks/TasksPage';
import ReportsPage from '@/pages/reports/ReportsPage';

// Services
import ServicesPage from '@/pages/services/ServicesPage';
import ChefDetailPage from '@/pages/services/ChefDetailPage';
import UserBookingsPage from '@/pages/services/UserBookingsPage';

// Settings
import SettingsPage from '@/pages/SettingsPage';
import NavigationSettings from '@/pages/settings/NavigationSettings';
import AccountSettings from '@/pages/settings/AccountSettings';
import AppearanceSettings from '@/pages/settings/AppearanceSettings';
import AccessibilitySettings from '@/pages/settings/AccessibilitySettings';
import DialectSettings from '@/pages/settings/DialectSettings';
import NotificationSettings from '@/pages/settings/NotificationSettings';
import NotificationsPage from '@/pages/notifications/NotificationsPage';

// Setup React Query
const queryClient = new QueryClient();

import './App.css';

// Recipe pages
import RecipesPage from './pages/recipes/RecipesPage';
import RecipeDetailPage from './pages/recipes/RecipeDetailPage';
import RecipeFormPage from './pages/recipes/RecipeFormPage';
import { Utensils } from 'lucide-react';

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <SettingsProvider>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Index />} />
              <Route path="/splash" element={<SplashScreen />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/signup" element={<SignupPage />} />

              {/* Protected Routes */}
              <Route path="/home" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
              <Route path="/create-family" element={<ProtectedRoute><CreateFamilyPage /></ProtectedRoute>} />
              <Route path="/family" element={<ProtectedRoute><FamilyPage /></ProtectedRoute>} />
              <Route path="/family/invitations" element={<ProtectedRoute><FamilyInvitationsPage /></ProtectedRoute>} />
              <Route path="/family/member/:id" element={<ProtectedRoute><MemberPage /></ProtectedRoute>} />
              <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
              
              {/* Features */}
              <Route path="/spaces" element={<ProtectedRoute><SpacesPage /></ProtectedRoute>} />
              <Route path="/spaces/:id" element={<ProtectedRoute><SpaceDetailPage /></ProtectedRoute>} />
              <Route path="/pantry" element={<ProtectedRoute><PantryPage /></ProtectedRoute>} />
              <Route path="/pantry/add" element={<ProtectedRoute><AddPantryItemPage /></ProtectedRoute>} />
              <Route path="/shopping" element={<ProtectedRoute><ShoppingListsPage /></ProtectedRoute>} />
              <Route path="/shopping/:id" element={<ProtectedRoute><ShoppingListDetailPage /></ProtectedRoute>} />
              <Route path="/shopping/list/:id" element={<ProtectedRoute><ShoppingListDetailPage /></ProtectedRoute>} />
              <Route path="/calendar" element={<ProtectedRoute><CalendarPage /></ProtectedRoute>} />
              <Route path="/tasks" element={<ProtectedRoute><TasksPage /></ProtectedRoute>} />
              <Route path="/reports" element={<ProtectedRoute><ReportsPage /></ProtectedRoute>} />
              <Route path="/notifications" element={<ProtectedRoute><NotificationsPage /></ProtectedRoute>} />
              
              {/* Services Routes */}
              <Route path="/services" element={<ProtectedRoute><ServicesPage /></ProtectedRoute>} />
              <Route path="/services/chef/:id" element={<ProtectedRoute><ChefDetailPage /></ProtectedRoute>} />
              <Route path="/services/bookings" element={<ProtectedRoute><UserBookingsPage /></ProtectedRoute>} />
              
              {/* Settings */}
              <Route path="/settings" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
              <Route path="/settings/navigation" element={<ProtectedRoute><NavigationSettings /></ProtectedRoute>} />
              <Route path="/settings/account" element={<ProtectedRoute><AccountSettings /></ProtectedRoute>} />
              <Route path="/settings/appearance" element={<ProtectedRoute><AppearanceSettings /></ProtectedRoute>} />
              <Route path="/settings/accessibility" element={<ProtectedRoute><AccessibilitySettings /></ProtectedRoute>} />
              <Route path="/settings/dialect" element={<ProtectedRoute><DialectSettings /></ProtectedRoute>} />
              <Route path="/settings/notifications" element={<ProtectedRoute><NotificationSettings /></ProtectedRoute>} />
              
              {/* Recipe Routes */}
              <Route path="/recipes" element={<ProtectedRoute><PageLayout title="Recipes" icon={<Utensils className="h-5 w-5" />}><RecipesPage /></PageLayout></ProtectedRoute>} />
              <Route path="/recipes/:id" element={<ProtectedRoute><PageLayout title="Recipe Details" icon={<Utensils className="h-5 w-5" />}><RecipeDetailPage /></PageLayout></ProtectedRoute>} />
              <Route path="/recipes/create" element={<ProtectedRoute><PageLayout title="Create Recipe" icon={<Utensils className="h-5 w-5" />}><RecipeFormPage /></PageLayout></ProtectedRoute>} />
              <Route path="/recipes/edit/:id" element={<ProtectedRoute><PageLayout title="Edit Recipe" icon={<Utensils className="h-5 w-5" />}><RecipeFormPage /></PageLayout></ProtectedRoute>} />
              
              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Toaster />
          </SettingsProvider>
        </AuthProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
