import React    from "react";
// import { Link } from "react-router-dom";


// const itemsProperties = [
//     {
//         name: "home",
//         content: "Home",
//         target: "/"
//     },
//     {
//         name: "events",
//         content: "Events",
//         target: "/events"
//     },
//     {
//         name: "login",
//         content: "Login",
//         target: "/login"
//     }
// ];


interface HeaderState {
    activeItem: string;
}

class Header extends React.Component<{}, HeaderState> {
    state = {
        activeItem: ""
    }

    handleItemClick = (itemName: string): void => {
        if (this.state.activeItem !== itemName) {
            this.setState({ activeItem: itemName });
        }
    }

    render() {
        // const menuItems = itemsProperties.map((it, idx: number) => (
        //     <Menu.Item
        //         as={Link}
        //         to={it.target}
        //         active={this.state.activeItem === it.name}
        //         key={idx}
        //         name={it.name}
        //         content={it.content}
        //         onClick={() => this.handleItemClick(it.name)}
        //     />
        // ));

        return (
            <div>
                Menu
                {/* <Menu>
                    {menuItems}
                </Menu> */}
            </div>
        );
    }
}

export default Header;
