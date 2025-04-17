import {
  BriefcaseBusiness,
  Home,
  Goal,
  CircleDollarSign,
  Shield,
  NotebookPen,
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import Image from 'next/image';

// Menu items.
const items = [
  {
    title: 'Home',
    url: '#',
    icon: Home,
  },
  {
    title: 'Cele i postępy',
    url: '#',
    icon: Goal,
  },
  {
    title: 'Oferty pracy',
    url: '#',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Budżet i Finanse',
    url: '#',
    icon: CircleDollarSign,
  },
  {
    title: 'Poduszka bezpieczeństwa',
    url: '#',
    icon: Shield,
  },
  {
    title: 'Notatki i refleksje',
    url: '#',
    icon: NotebookPen,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className='flex justify-center items-center'>
        <Link href='/'>
          <Image
            src='/logo.png'
            alt='logo'
            width={180}
            height={38}
          />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
