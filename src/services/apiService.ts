const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
const API_ORIGIN = API_BASE_URL.replace(/\/api\/?$/, '');

export type PageKey = 'home' | 'about' | 'contact' | 'footer';

export interface AppointmentPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: string;
  gender: string;
  sessionType: string;
  preferredDate: string;
  preferredTime: string;
  alternativeDate?: string;
  alternativeTime?: string;
  previousTherapy: string;
  currentMedication: string;
  medicationList?: string;
  concerns: string;
  emergencyContact: string;
  emergencyPhone: string;
  howDidYouHear?: string;
  consent: boolean;
}

export interface ContactMessagePayload {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  preferredContact?: string;
  serviceType?: string;
}

export interface BlogPostRecord {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  categoryId: string | null;
  tags: string[];
  readTime: number;
  status: 'draft' | 'published';
  publishedAt: string | null;
  authorId: string;
  authorName: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  viewCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface FaqRecord {
  id: string;
  question: string;
  answer: string;
  sortOrder: number;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ServiceRecord {
  id: string;
  slug: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  duration: string;
  frequency: string;
  approach: string;
  sortOrder: number;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface PageContentRecord {
  id: string;
  pageKey: PageKey;
  sections: Record<string, unknown>;
  seo: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
}

export interface PublicSiteSettings {
  siteName: string;
  professionalTitle: string;
  activeHomeDesign: number;
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  workingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  instagramUrl: string;
  defaultSeo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const resolveAssetUrl = (value?: string | null) => {
  if (!value) {
    return '';
  }

  if (/^https?:\/\//i.test(value)) {
    return value;
  }

  return `${API_ORIGIN}${value.startsWith('/') ? value : `/${value}`}`;
};

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });

  const contentType = response.headers.get('content-type') || '';
  const payload = contentType.includes('application/json') ? await response.json() : null;

  if (!response.ok) {
    const message =
      payload?.error ||
      payload?.message ||
      `Request failed with status ${response.status}`;
    throw new Error(message);
  }

  return payload as T;
}

export const apiService = {
  async createAppointment(appointmentData: AppointmentPayload) {
    return request<{ message: string; id: string }>('/appointments', {
      method: 'POST',
      body: JSON.stringify(appointmentData),
    });
  },

  async sendContactMessage(messageData: ContactMessagePayload) {
    return request<{ message: string; id: string }>('/contact', {
      method: 'POST',
      body: JSON.stringify(messageData),
    });
  },

  async getBlogPosts() {
    return request<BlogPostRecord[]>('/blog');
  },

  async getBlogPost(idOrSlug: string) {
    return request<BlogPostRecord>(`/blog/${idOrSlug}`);
  },

  async getFaqItems() {
    return request<FaqRecord[]>('/faq');
  },

  async getServices() {
    return request<ServiceRecord[]>('/services');
  },

  async getPublicSettings() {
    return request<PublicSiteSettings>('/settings/public');
  },

  async getPublicContent(pageKey: PageKey) {
    return request<PageContentRecord>(`/content/${pageKey}`);
  },

  async healthCheck() {
    try {
      const response = await fetch(`${API_BASE_URL}/health`, {
        method: 'GET',
      });
      return response.ok;
    } catch {
      return false;
    }
  },
};
