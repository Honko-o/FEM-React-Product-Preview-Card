import React, { Component } from 'react';

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
                    <img
                        src="../../images/image-product-desktop.jpg"
                        alt="perfume img"
                    />
                </div>
            );
        }

        return (
            <div className="product-image">
                <img
                    src="../../images/image-product-mobile.jpg"
                    alt="perfume img"
                />
            </div>
        );
    }
}

export default ProductImage;
