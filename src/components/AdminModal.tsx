import React, { useState, useEffect } from 'react';
import {
  SchoolInfo,
  GalleryItem,
  NewsItem,
  EnquiriesItem,
  AnalyticsStats,
  AdminUser
} from '../types';
import {
  getAdminSession,
  setAdminSession,
  saveSchoolInfo,
  saveGallery,
  saveNews,
  updateEnquiryStatus,
  deleteEnquiry
} from '../utils/storage';
import { generateAndDownloadSourceZip } from '../utils/zipGenerator';
import {
  X,
  Lock,
  Download,
  BarChart3,
  FileText,
  Image as ImageIcon,
  Newspaper,
  MessageSquare,
  LogOut,
  Plus,
  Trash2,
  CheckCircle,
  Eye,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  UserCheck,
  Shield,
  Clock,
  Sparkles,
  Search
} from 'lucide-react';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  schoolInfo: SchoolInfo;
  setSchoolInfo: (info: SchoolInfo) => void;
  gallery: GalleryItem[];
  setGallery: (gallery: GalleryItem[]) => void;
  news: NewsItem[];
  setNews: (news: NewsItem[]) => void;
  enquiries: EnquiriesItem[];
  setEnquiries: (enquiries: EnquiriesItem[]) => void;
  analytics: AnalyticsStats;
}

export const AdminModal: React.FC<AdminModalProps> = ({
  isOpen,
  onClose,
  schoolInfo,
  setSchoolInfo,
  gallery,
  setGallery,
  news,
  setNews,
  enquiries,
  setEnquiries,
  analytics
}) => {
  const [session, setSession] = useState<AdminUser>({ username: 'admin', isLoggedIn: false });
  const [passwordInput, setPasswordInput] = useState('');
  const [usernameInput, setUsernameInput] = useState('admin');
  const [loginError, setLoginError] = useState('');
  const [activeTab, setActiveTab] = useState<'analytics' | 'content' | 'gallery' | 'news' | 'enquiries'>('analytics');
  const [isZipping, setIsZipping] = useState(false);

  // Filter state for Enquiries
  const [enquiryFilter, setEnquiryFilter] = useState<'All' | 'New' | 'In Progress' | 'Resolved'>('All');

  // Edit states for CMS
  const [editingInfo, setEditingInfo] = useState<SchoolInfo>(schoolInfo);

  // New Gallery Item state
  const [newGalTitle, setNewGalTitle] = useState('');
  const [newGalCat, setNewGalCat] = useState<GalleryItem['category']>('Classroom Learning');
  const [newGalUrl, setNewGalUrl] = useState('/images/classroom.jpg');
  const [newGalCaption, setNewGalCaption] = useState('');

  // New Article state
  const [newNewsTitle, setNewNewsTitle] = useState('');
  const [newNewsSummary, setNewNewsSummary] = useState('');
  const [newNewsContent, setNewNewsContent] = useState('');
  const [newNewsCategory, setNewNewsCategory] = useState<NewsItem['category']>('Academic');

  useEffect(() => {
    setSession(getAdminSession());
    setEditingInfo(schoolInfo);
  }, [schoolInfo, isOpen]);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === 'almahir2026#admin' || passwordInput === 'admin') {
      const newSession: AdminUser = {
        username: usernameInput || 'admin',
        isLoggedIn: true,
        loginTime: new Date().toLocaleString()
      };
      setSession(newSession);
      setAdminSession(newSession);
      setLoginError('');
      setPasswordInput('');
    } else {
      setLoginError('Invalid Administrator Password. Try: almahir2026#admin');
    }
  };

  const handleLogout = () => {
    const newSession: AdminUser = { username: 'admin', isLoggedIn: false };
    setSession(newSession);
    setAdminSession(newSession);
  };

  const handleSaveInfo = () => {
    setSchoolInfo(editingInfo);
    saveSchoolInfo(editingInfo);
    alert('School information updated successfully!');
  };

  const handleAddGalleryItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGalTitle || !newGalCaption) return;

    const newItem: GalleryItem = {
      id: 'gal-' + Date.now(),
      title: newGalTitle,
      category: newGalCat,
      imageUrl: newGalUrl || '/images/classroom.jpg',
      caption: newGalCaption,
      isRepresentative: true
    };

    const updated = [newItem, ...gallery];
    setGallery(updated);
    saveGallery(updated);

    setNewGalTitle('');
    setNewGalCaption('');
    alert('New image added to School Life gallery!');
  };

  const handleDeleteGalleryItem = (id: string) => {
    if (confirm('Are you sure you want to delete this gallery item?')) {
      const updated = gallery.filter(g => g.id !== id);
      setGallery(updated);
      saveGallery(updated);
    }
  };

  const handleAddNewsItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNewsTitle || !newNewsSummary || !newNewsContent) return;

    const newItem: NewsItem = {
      id: 'news-' + Date.now(),
      title: newNewsTitle,
      summary: newNewsSummary,
      content: newNewsContent,
      date: new Date().toISOString().slice(0, 10),
      category: newNewsCategory,
      imageUrl: '/images/hero-students.jpg',
      published: true
    };

    const updated = [newItem, ...news];
    setNews(updated);
    saveNews(updated);

    setNewNewsTitle('');
    setNewNewsSummary('');
    setNewNewsContent('');
    alert('New announcement published successfully!');
  };

  const handleDeleteNewsItem = (id: string) => {
    if (confirm('Are you sure you want to delete this article?')) {
      const updated = news.filter(n => n.id !== id);
      setNews(updated);
      saveNews(updated);
    }
  };

  const handleStatusChange = (id: string, status: EnquiriesItem['status']) => {
    updateEnquiryStatus(id, status);
    const updated = enquiries.map(e => e.id === id ? { ...e, status } : e);
    setEnquiries(updated);
  };

  const handleDeleteEnquiry = (id: string) => {
    if (confirm('Delete this enquiry record?')) {
      deleteEnquiry(id);
      setEnquiries(enquiries.filter(e => e.id !== id));
    }
  };

  const handleDownloadZip = async () => {
    setIsZipping(true);
    try {
      await generateAndDownloadSourceZip();
    } catch (err) {
      console.error(err);
      alert('Failed to generate ZIP archive.');
    } finally {
      setIsZipping(false);
    }
  };

  const filteredEnquiries = enquiryFilter === 'All'
    ? enquiries
    : enquiries.filter(e => e.status === enquiryFilter);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-[#F8FAF7] rounded-3xl max-w-6xl w-full max-h-[92vh] flex flex-col shadow-2xl border-2 border-[#0B3D2E] overflow-hidden my-4 relative animate-in fade-in duration-200">
        
        {/* Modal Top Header Bar */}
        <div className="bg-[#0B3D2E] text-white p-5 sm:p-6 flex justify-between items-center border-b-2 border-[#D6B65A] shrink-0">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-[#176B45] text-[#D6B65A] rounded-xl border border-[#D6B65A]/40">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-xl sm:text-2xl text-white leading-tight">
                AlMahir College Admin Portal
              </h2>
              <p className="text-xs text-[#D6B65A]">
                Secure Content Management &amp; School Analytics
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {session.isLoggedIn && (
              <button
                onClick={handleDownloadZip}
                disabled={isZipping}
                className="bg-[#D6B65A] hover:bg-[#c4a446] text-[#0B3D2E] font-bold text-xs px-4 py-2 rounded-xl transition-all shadow cursor-pointer flex items-center gap-1.5"
                title="Download Website Source ZIP"
              >
                <Download className="w-4 h-4" />
              </button>
            )}

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Modal Main Content Container */}
        {!session.isLoggedIn ? (
          /* Login Screen */
          <div className="p-8 sm:p-12 max-w-md mx-auto my-auto w-full space-y-6">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-[#0B3D2E] text-[#D6B65A] rounded-2xl flex items-center justify-center mx-auto border-2 border-[#D6B65A] shadow-lg">
                <Lock className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#0B3D2E]">
                Administrator Authentication
              </h3>
              <p className="text-xs text-gray-600">
                Authorized staff access only for AlMahir College Dutse.
              </p>
            </div>

            {loginError && (
              <div className="p-3 bg-red-100 text-red-700 text-xs rounded-xl font-medium text-center border border-red-200">
                {loginError}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#0B3D2E] uppercase mb-1">
                  Username
                </label>
                <input
                  type="text"
                  value={usernameInput}
                  onChange={(e) => setUsernameInput(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#176B45] text-sm"
                  placeholder="admin"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0B3D2E] uppercase mb-1">
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#176B45] text-sm"
                  placeholder="••••••••••••"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#0B3D2E] hover:bg-[#176B45] text-white font-bold py-3 rounded-xl shadow-md transition-colors cursor-pointer text-sm"
              >
                Log In to Admin Dashboard
              </button>
            </form>

            <div className="pt-2 text-center">
              <button
                type="button"
                onClick={() => setPasswordInput('almahir2026#admin')}
                className="text-xs text-[#176B45] hover:underline font-semibold cursor-pointer"
              >
                Auto-Fill Demo Admin Password (almahir2026#admin)
              </button>
            </div>
          </div>
        ) : (
          /* Authenticated Dashboard */
          <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
            
            {/* Sidebar Navigation */}
            <div className="w-full md:w-64 bg-[#0B3D2E] text-white p-4 space-y-2 border-r border-[#176B45] shrink-0 flex flex-row md:flex-col justify-between overflow-x-auto">
              <div className="space-y-1 w-full flex md:flex-col gap-1">
                <button
                  onClick={() => setActiveTab('analytics')}
                  className={`w-full text-left px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 cursor-pointer ${
                    activeTab === 'analytics' ? 'bg-[#D6B65A] text-[#0B3D2E]' : 'hover:bg-[#176B45] text-gray-200'
                  }`}
                >
                  <BarChart3 className="w-4 h-4 shrink-0" />
                  <span>Analytics</span>
                </button>

                <button
                  onClick={() => setActiveTab('enquiries')}
                  className={`w-full text-left px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center justify-between cursor-pointer ${
                    activeTab === 'enquiries' ? 'bg-[#D6B65A] text-[#0B3D2E]' : 'hover:bg-[#176B45] text-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 shrink-0" />
                    <span>Enquiries</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#176B45] text-white">
                    {enquiries.length}
                  </span>
                </button>

                <button
                  onClick={() => setActiveTab('content')}
                  className={`w-full text-left px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 cursor-pointer ${
                    activeTab === 'content' ? 'bg-[#D6B65A] text-[#0B3D2E]' : 'hover:bg-[#176B45] text-gray-200'
                  }`}
                >
                  <FileText className="w-4 h-4 shrink-0" />
                  <span>School Info CMS</span>
                </button>

                <button
                  onClick={() => setActiveTab('gallery')}
                  className={`w-full text-left px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 cursor-pointer ${
                    activeTab === 'gallery' ? 'bg-[#D6B65A] text-[#0B3D2E]' : 'hover:bg-[#176B45] text-gray-200'
                  }`}
                >
                  <ImageIcon className="w-4 h-4 shrink-0" />
                  <span>Gallery CMS</span>
                </button>

                <button
                  onClick={() => setActiveTab('news')}
                  className={`w-full text-left px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 cursor-pointer ${
                    activeTab === 'news' ? 'bg-[#D6B65A] text-[#0B3D2E]' : 'hover:bg-[#176B45] text-gray-200'
                  }`}
                >
                  <Newspaper className="w-4 h-4 shrink-0" />
                  <span>News CMS</span>
                </button>
              </div>

              <div className="pt-4 border-t border-white/10 hidden md:block">
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2.5 rounded-xl bg-red-900/60 hover:bg-red-800 text-red-200 text-xs font-semibold transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Log Out ({session.username})</span>
                </button>
              </div>
            </div>

            {/* Dashboard Content Pane */}
            <div className="flex-1 p-6 overflow-y-auto max-h-[calc(92vh-80px)] space-y-6">
              
              {/* TAB 1: ANALYTICS */}
              {activeTab === 'analytics' && (
                <div className="space-y-6">
                  
                  {/* Summary Metric Cards */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-1">
                      <span className="text-xs text-gray-500 font-bold uppercase">Total Visitors</span>
                      <div className="text-2xl font-serif font-extrabold text-[#0B3D2E]">
                        {analytics.visitors.toLocaleString()}
                      </div>
                      <span className="text-[10px] text-emerald-600 font-semibold">+18% this month</span>
                    </div>

                    <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-1">
                      <span className="text-xs text-gray-500 font-bold uppercase">Total Page Views</span>
                      <div className="text-2xl font-serif font-extrabold text-[#176B45]">
                        {analytics.pageViews.toLocaleString()}
                      </div>
                      <span className="text-[10px] text-emerald-600 font-semibold">+24% vs last term</span>
                    </div>

                    <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-1">
                      <span className="text-xs text-gray-500 font-bold uppercase">Contact Enquiries</span>
                      <div className="text-2xl font-serif font-extrabold text-[#0B3D2E]">
                        {enquiries.length}
                      </div>
                      <span className="text-[10px] text-[#D6B65A] font-bold">
                        {enquiries.filter(e => e.status === 'New').length} pending review
                      </span>
                    </div>

                    <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-1">
                      <span className="text-xs text-gray-500 font-bold uppercase">WhatsApp / Calls</span>
                      <div className="text-2xl font-serif font-extrabold text-emerald-700">
                        {analytics.whatsappClicks + analytics.phoneClicks}
                      </div>
                      <span className="text-[10px] text-gray-500 font-semibold">
                        {analytics.whatsappClicks} WA &bull; {analytics.phoneClicks} Calls
                      </span>
                    </div>
                  </div>

                  {/* Detailed Analytics Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Visitor Locations */}
                    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
                      <h4 className="font-serif font-bold text-base text-[#0B3D2E] flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#176B45]" />
                        <span>Top Visitor Locations</span>
                      </h4>
                      <div className="space-y-2">
                        {analytics.locations.map((loc, idx) => (
                          <div key={idx} className="flex justify-between items-center text-xs font-medium border-b border-gray-100 pb-1.5">
                            <span className="text-gray-700">{loc.city}</span>
                            <span className="font-mono text-[#0B3D2E] font-bold">{loc.count} visits</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Popular Pages */}
                    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
                      <h4 className="font-serif font-bold text-base text-[#0B3D2E] flex items-center gap-2">
                        <Eye className="w-4 h-4 text-[#176B45]" />
                        <span>Most Visited Pages</span>
                      </h4>
                      <div className="space-y-2">
                        {analytics.popularPages.map((pg, idx) => (
                          <div key={idx} className="flex justify-between items-center text-xs font-medium border-b border-gray-100 pb-1.5">
                            <span className="text-gray-700">{pg.name}</span>
                            <span className="font-mono text-[#176B45] font-bold">{pg.views} views</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Recent System Activity */}
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
                    <h4 className="font-serif font-bold text-base text-[#0B3D2E] flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#D6B65A]" />
                      <span>Recent System Activity Feed</span>
                    </h4>
                    <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
                      {analytics.recentActivity.map((act, idx) => (
                        <div key={idx} className="flex items-start justify-between text-xs p-2 bg-[#F8FAF7] rounded-lg border border-gray-100">
                          <span className="text-gray-800 font-medium">{act.text}</span>
                          <span className="text-[10px] text-gray-400 font-mono shrink-0 ml-2">{act.timestamp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              )}

              {/* TAB 2: ENQUIRIES */}
              {activeTab === 'enquiries' && (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    <h3 className="font-serif font-bold text-xl text-[#0B3D2E]">
                      Manage Admission &amp; Contact Enquiries
                    </h3>

                    {/* Filter Pills */}
                    <div className="flex items-center space-x-1 text-xs">
                      {(['All', 'New', 'In Progress', 'Resolved'] as const).map(status => (
                        <button
                          key={status}
                          onClick={() => setEnquiryFilter(status)}
                          className={`px-3 py-1.5 rounded-lg font-bold transition-colors cursor-pointer ${
                            enquiryFilter === status ? 'bg-[#0B3D2E] text-white' : 'bg-gray-200 text-gray-700'
                          }`}
                        >
                          {status}
                        </button>
                      ))}
                    </div>
                  </div>

                  {filteredEnquiries.length === 0 ? (
                    <div className="p-8 text-center bg-white rounded-2xl border border-gray-200 text-gray-500 text-sm">
                      No enquiries match the selected filter.
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {filteredEnquiries.map((enq) => (
                        <div key={enq.id} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-3">
                          <div className="flex flex-wrap justify-between items-center gap-2 border-b border-gray-100 pb-2">
                            <div className="flex items-center space-x-2">
                              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                                enq.type === 'admission' ? 'bg-[#0B3D2E] text-[#D6B65A]' : 'bg-[#176B45] text-white'
                              }`}>
                                {enq.type.toUpperCase()}
                              </span>
                              <span className="font-bold text-[#0B3D2E] text-sm">{enq.name}</span>
                              {enq.parentName && <span className="text-xs text-gray-500">({enq.parentName})</span>}
                            </div>

                            <div className="flex items-center space-x-2">
                              <span className="text-[10px] text-gray-400 font-mono">{enq.createdAt}</span>
                              <select
                                value={enq.status}
                                onChange={(e) => handleStatusChange(enq.id, e.target.value as any)}
                                className={`text-xs font-bold px-2 py-1 rounded-lg border cursor-pointer ${
                                  enq.status === 'New' ? 'bg-red-50 text-red-700 border-red-200' :
                                  enq.status === 'In Progress' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                                  'bg-emerald-50 text-emerald-700 border-emerald-200'
                                }`}
                              >
                                <option value="New">New</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Resolved">Resolved</option>
                              </select>
                              <button
                                onClick={() => handleDeleteEnquiry(enq.id)}
                                className="p-1 text-gray-400 hover:text-red-600 transition-colors cursor-pointer"
                                title="Delete Record"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>

                          <p className="text-xs text-gray-700 leading-relaxed bg-[#F8FAF7] p-3 rounded-xl border border-gray-100">
                            "{enq.message}"
                          </p>

                          <div className="flex flex-wrap items-center justify-between text-xs text-gray-600 pt-1">
                            <div className="flex items-center space-x-4">
                              <span className="font-semibold text-[#176B45]">Phone: {enq.phone}</span>
                              <span>Email: {enq.email}</span>
                              {enq.grade && <span className="font-semibold">Grade: {enq.grade}</span>}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: SCHOOL INFO CMS */}
              {activeTab === 'content' && (
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
                  <h3 className="font-serif font-bold text-xl text-[#0B3D2E]">
                    Manage School Information &amp; Announcement Banner
                  </h3>

                  <div className="space-y-4 text-xs">
                    <div>
                      <label className="block font-bold text-gray-700 uppercase mb-1">
                        Announcement Banner (Top Notice)
                      </label>
                      <input
                        type="text"
                        value={editingInfo.announcementBanner || ''}
                        onChange={(e) => setEditingInfo({ ...editingInfo, announcementBanner: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-gray-700 uppercase mb-1">
                        Hero Main Headline
                      </label>
                      <input
                        type="text"
                        value={editingInfo.heroHeadline}
                        onChange={(e) => setEditingInfo({ ...editingInfo, heroHeadline: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs font-bold"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-gray-700 uppercase mb-1">
                        Hero Subheadline / Motto
                      </label>
                      <input
                        type="text"
                        value={editingInfo.heroSubheadline}
                        onChange={(e) => setEditingInfo({ ...editingInfo, heroSubheadline: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-gray-700 uppercase mb-1">
                        Hero Body Paragraph
                      </label>
                      <textarea
                        rows={3}
                        value={editingInfo.heroBody}
                        onChange={(e) => setEditingInfo({ ...editingInfo, heroBody: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs"
                      ></textarea>
                    </div>

                    <button
                      onClick={handleSaveInfo}
                      className="bg-[#0B3D2E] hover:bg-[#176B45] text-white font-bold px-6 py-2.5 rounded-xl shadow cursor-pointer text-xs"
                    >
                      Save School Info Updates
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 4: GALLERY CMS */}
              {activeTab === 'gallery' && (
                <div className="space-y-6">
                  {/* Add New Image Form */}
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
                    <h3 className="font-serif font-bold text-lg text-[#0B3D2E]">
                      Upload / Add New Gallery Image
                    </h3>

                    <form onSubmit={handleAddGalleryItem} className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Image Title *</label>
                        <input
                          type="text"
                          required
                          value={newGalTitle}
                          onChange={(e) => setNewGalTitle(e.target.value)}
                          placeholder="e.g. Science Laboratory Session"
                          className="w-full px-3 py-2 rounded-xl border border-gray-300"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Category</label>
                        <select
                          value={newGalCat}
                          onChange={(e) => setNewGalCat(e.target.value as any)}
                          className="w-full px-3 py-2 rounded-xl border border-gray-300 bg-white"
                        >
                          <option value="Classroom Learning">Classroom Learning</option>
                          <option value="Islamic Learning">Islamic Learning</option>
                          <option value="Student Activities">Student Activities</option>
                          <option value="Leadership & Character">Leadership &amp; Character</option>
                          <option value="School Community">School Community</option>
                        </select>
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block font-bold text-gray-700 mb-1">Image URL / Path</label>
                        <input
                          type="text"
                          value={newGalUrl}
                          onChange={(e) => setNewGalUrl(e.target.value)}
                          className="w-full px-3 py-2 rounded-xl border border-gray-300"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block font-bold text-gray-700 mb-1">Image Caption *</label>
                        <input
                          type="text"
                          required
                          value={newGalCaption}
                          onChange={(e) => setNewGalCaption(e.target.value)}
                          placeholder="Brief description of the image..."
                          className="w-full px-3 py-2 rounded-xl border border-gray-300"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <button
                          type="submit"
                          className="bg-[#0B3D2E] hover:bg-[#176B45] text-white font-bold px-5 py-2.5 rounded-xl shadow cursor-pointer"
                        >
                          Add Image To Gallery
                        </button>
                      </div>
                    </form>
                  </div>

                  {/* Existing Gallery List */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {gallery.map(item => (
                      <div key={item.id} className="bg-white p-3 rounded-2xl border border-gray-200 shadow-sm space-y-2 relative">
                        <img src={item.imageUrl} alt={item.title} className="w-full h-32 object-cover rounded-xl" />
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-xs text-[#0B3D2E]">{item.title}</span>
                          <button onClick={() => handleDeleteGalleryItem(item.id)} className="text-red-600 hover:text-red-800 cursor-pointer">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-[10px] text-gray-500">{item.caption}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 5: NEWS CMS */}
              {activeTab === 'news' && (
                <div className="space-y-6">
                  {/* Add News Form */}
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
                    <h3 className="font-serif font-bold text-lg text-[#0B3D2E]">
                      Publish New Announcement / Article
                    </h3>

                    <form onSubmit={handleAddNewsItem} className="space-y-3 text-xs">
                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Article Title *</label>
                        <input
                          type="text"
                          required
                          value={newNewsTitle}
                          onChange={(e) => setNewNewsTitle(e.target.value)}
                          placeholder="e.g. Mid-Term Academic Progress Report"
                          className="w-full px-3 py-2 rounded-xl border border-gray-300"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Category</label>
                        <select
                          value={newNewsCategory}
                          onChange={(e) => setNewNewsCategory(e.target.value as any)}
                          className="w-full px-3 py-2 rounded-xl border border-gray-300 bg-white"
                        >
                          <option value="Academic">Academic</option>
                          <option value="Islamic Event">Islamic Event</option>
                          <option value="Announcement">Announcement</option>
                          <option value="Parent Notice">Parent Notice</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Summary *</label>
                        <input
                          type="text"
                          required
                          value={newNewsSummary}
                          onChange={(e) => setNewNewsSummary(e.target.value)}
                          placeholder="Short summary preview..."
                          className="w-full px-3 py-2 rounded-xl border border-gray-300"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Full Article Content *</label>
                        <textarea
                          rows={4}
                          required
                          value={newNewsContent}
                          onChange={(e) => setNewNewsContent(e.target.value)}
                          placeholder="Detailed announcement text..."
                          className="w-full px-3 py-2 rounded-xl border border-gray-300"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="bg-[#0B3D2E] hover:bg-[#176B45] text-white font-bold px-5 py-2.5 rounded-xl shadow cursor-pointer"
                      >
                        Publish Notice
                      </button>
                    </form>
                  </div>

                  {/* Existing News */}
                  <div className="space-y-3">
                    {news.map(item => (
                      <div key={item.id} className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm flex justify-between items-start">
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-[10px] font-bold bg-[#176B45] text-white px-2 py-0.5 rounded-full">{item.category}</span>
                            <span className="text-xs text-gray-400 font-mono">{item.date}</span>
                          </div>
                          <h4 className="font-bold text-sm text-[#0B3D2E] mt-1">{item.title}</h4>
                          <p className="text-xs text-gray-600 mt-1">{item.summary}</p>
                        </div>
                        <button onClick={() => handleDeleteNewsItem(item.id)} className="text-red-600 hover:text-red-800 p-1 cursor-pointer">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>
        )}

      </div>
    </div>
  );
};
