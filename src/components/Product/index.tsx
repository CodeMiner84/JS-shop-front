import * as React from 'react';
import { connect } from 'react-redux';
import Product from './Product';
import Row from 'reactstrap/lib/Row';
import { getProducts } from '../../actions';
import { AppState } from '../../application/index';
import { CartItem } from '../../models/cart';

interface ProductProps {
  readonly getProducts: () => void;
}

class Products extends React.Component<ProductProps & AppState, any> {
  constructor(props: ProductProps & AppState) {
    super(props);

    props.getProducts();
  }

  render() {
    const { products, loading } = this.props;

    if (loading) {
      return <div />;
    }

    return (
      <React.Fragment>
        <h1>Product list</h1>
        {products !== undefined && (
          <Row>
            {Object.keys(products).map(key => (
              <Product key={key} product={products[key]} />
            ))}
          </Row>
        )}
      </React.Fragment>
    );
  }
}

interface MyProps {
  product: {
    products: CartItem;
  };
  loading: () => void;
}

const mapStateToProps = ({ product: { products }, loading }: MyProps) => ({
  products,
  loading,
});

const mapDispatchToProps = {
  getProducts: getProducts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products);
