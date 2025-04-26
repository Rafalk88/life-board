import {
  BriefcaseBusiness,
  Home,
  Goal,
  CircleDollarSign,
  Shield,
  NotebookPen,
  CircleHelp,
  LogOut,
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import Image from 'next/image';

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
    <Sidebar collapsible='icon'>
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
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarGroup className='p-0 pb-10'>
          <SidebarGroupContent className='list-none'>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href='/'>
                  <CircleHelp />
                  <span>Pomoc</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href='/'>
                  <LogOut />
                  <span>Wyloguj</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
}
