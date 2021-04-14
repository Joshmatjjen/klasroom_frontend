import React from 'react';
import Link from 'next/link';

import {Nav, Navbar, NavItem,
  UncontrolledDropdown,DropdownToggle, DropdownMenu, DropdownItem,
  NavLink, NavbarBrand, NavbarToggler, NavbarText, 
  FormGroup, Input, Badge, Button, 
} from 'reactstrap';

import styles from "./MainHeader.module.scss";

const MainHeader = ({user}) => {
  return (
    <header>
      <Navbar className={styles.topnav}>
        <NavbarBrand className={styles.brand}>
          KLASROOM
        </NavbarBrand>
        

                

        <Nav className="ml-auto">
          <NavItem className={styles.desktopMenu}>
            <Link href={`/courses`} passHref>
              <NavLink className={styles.linkclass}>
                Courses
              </NavLink>
            </Link>
          </NavItem>

          <NavItem className={styles.desktopMenu}>
            <Link href={`/webinars`} passHref>
              <NavLink className={styles.linkclass}>
                Webinars
              </NavLink>
            </Link>
          </NavItem>

          <NavItem className={styles.desktopMenu}>
            <Link href={`/klasroom-for-business`} passHref>
              <NavLink className={styles.linkclass}>
                Klasroom for Business
              </NavLink>
            </Link>
          </NavItem>

          <NavItem className={styles.desktopMenu}>
            <Link href={`/blog`} passHref>
              <NavLink className={styles.linkclass}>
                Blog
              </NavLink>
            </Link>
          </NavItem>

                {/* {user && (user.logo !==undefined || user.avatar !== undefined) && <>
                    <NavItem className={styles.desktopMenu}>
                        <Link href={section === 'root' ? `${section}/dashboard/notification` : `/${router.query.hostname}/${section.split('/')[1]}/dashboard/notification`} passHref>
                            <NavLink className={styles.linkclass}>
                            
                                <Bell size={20} className={styles.menuicon} />
                                <Badge color="danger" pill className={styles.notificationbadge}>4</Badge>
                                
                            </NavLink>
                        </Link>
                    </NavItem>
                    </>
                } */}

              {/* <NavItem className={styles.navToggler}>
                  <Button onClick={() => toggleNav()} className={styles.menubutton}>
                      <Bars size={16} className={styles.menuicon} />
                  </Button>
              </NavItem> */}
          </Nav>
      </Navbar>
    </header>
  )
}

export default MainHeader
