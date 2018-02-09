
export class Menus {
  public static menus: Array<any> = [
    
    {
      name: 'Dashboard',
      key: 'employee-dashboard',
      link: 'employee-dashboard',
      icon: 'left-panel-icon text22 icon-dashboard',
      roles: ['employee']
    },
    {
      name: 'Dashboard',
      key: 'dashboard',
      link: 'dashboard',
      icon: 'left-panel-icon text22 icon-dashboard',
      roles: ['admin']
    },
    {
      name: 'Dashboard',
      key: 'employer-dashboard',
      link: 'employer-dashboard',
      icon: 'left-panel-icon text22 icon-dashboard',
      roles: ['employer']
    },
    {
      name: 'Admin Master',
      key: 'admin',
      link: 'admin',
      icon: 'left-panel-icon text22 icon-employee-master',
      roles: ['admin']
    },
    {
      name: 'Java Master',
      key: 'benefits',
      link: 'benefits',
      icon: 'left-panel-icon text22 icon-benefit-master',
      roles: ['admin', 'employer']
    },
    {
      name: 'Angular Master',
      key: 'angular',
      link: 'angular',
      icon: 'left-panel-icon text22 icon-carrier-master',
      roles: ['admin', 'employer']
    },
    {
      name: 'Pentaho Master',
      key: 'pentaho',
      link: 'pentaho',
      icon: 'left-panel-icon text22 icon-coverage-master',
      roles: ['admin', 'employer']
    },
    {
      name: 'Spring Boot Master',
      key: 'spring-types',
      link: 'spring-types',
      icon: 'left-panel-icon text22 icon-employee-type',
      roles: ['admin', 'employer']
    },
    {
      name: 'Technology Master',
      key: 'technology-master',
      link: 'technology-master',
      icon: 'left-panel-icon text22',
      roles: ['employer']
    },
    {
      name: 'Developer',
      key: 'developer',
      link: 'developer',
      icon: 'left-panel-icon text22',
      roles: ['admin', 'employer']
    },
    {
      name: 'My Profile',
      key: 'profile',
      link: 'profile',
      icon: 'left-panel-icon text22',
      roles: ['employee']
    },
    {
      name: 'My Jobs',
      key: 'myjob',
      link: 'myjob',
      icon: 'left-panel-icon text20 icon-icons',
      roles: ['employee']
    },
    {
      name: 'Progress',
      key: 'progress',
      link: 'progress',
      icon: 'left-panel-icon text20',
      roles: ['employee']
    },
    {
      name: 'My Bookings',
      key: 'booking',
      link: 'booking',
      icon: 'left-panel-icon text22',
      roles: ['employee']
    },
    {
      name: 'Cancel Bookings',
      key: 'cnlbooking',
      link: 'cnlbooking',
      icon: 'left-panel-icon text22',
      roles: ['employee', 'employer']
    }
  ];

  public static getMenus(role: string): Array<any> {
    return this.menus.filter(function (menu) {
      return (typeof menu.roles !== 'undefined') ? menu.roles.indexOf(role) > -1 : false;
    });
  }

  public static getMenuTabs(key: string) {
    if (this.menus.length > 0) {
      return this.menus.find((item: any) => {
        return item.key === key;
      });
    }

    return [];
  }

}