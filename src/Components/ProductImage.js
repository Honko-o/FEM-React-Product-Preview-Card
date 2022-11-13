import React, { Component } from 'react';
import mobileImage from '../images/image-product-mobile.jpg';
import pcImage from '../images/image-product-desktop.jpg';
class ProductImage extends Component {
    state = { windowWidth: window.innerWidth };

    onWindowResize = () => {
        this.setState({ windowWidth: window.innerWidth });
    };

    componentDidMount() {
        window.addEventListener('resize', this.onWindowResize);
    }

    // Event Listeners Cleanup
    componentWillUnmount() {
        window.removeEventListener('resize', this.onWindowResize);
    }

    render() {
        if (this.state.windowWidth >= 680) {
            return (
                <div className="product-image">
                    <img src={pcImage} alt="perfume img" />
                </div>
            );
        }

        return (
            <div className="product-image">
                <img src={mobileImage} alt="perfume img" />
            </div>
        );
    }
}

export default ProductImage;
