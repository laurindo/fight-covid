import Text from "./Text";
import React, {Component} from "react";

export class H1 extends Component {
  render = () => <Text variant="h1" {...this.props} />;
}

export class H2 extends Component {
  render = () => <Text variant="h2" {...this.props} />;
}

export class H3 extends Component {
  render = () => <Text variant="h3" {...this.props} />;
}

export class H4 extends Component {
  render = () => <Text variant="h4" {...this.props} />;
}

export class H5 extends Component {
  render = () => <Text variant="h5" {...this.props} />;
}

export class H6 extends Component {
  render = () => <Text variant="h6" {...this.props} />;
}

export class S1 extends Component {
  render = () => <Text variant="subtitle1" {...this.props} />;
}

export class S2 extends Component {
  render = () => <Text variant="subtitle2" {...this.props} />;
}

export class P1 extends Component {
  render = () => <Text variant="body1" {...this.props} />;
}

export class P2 extends Component {
  render = () => <Text variant="body2" {...this.props} />;
}

export class P3 extends Component {
  render = () => <Text variant="caption" {...this.props} />;
}

H1.propTypes = Text.propTypes;
H2.propTypes = Text.propTypes;
H3.propTypes = Text.propTypes;
H4.propTypes = Text.propTypes;
H5.propTypes = Text.propTypes;
H6.propTypes = Text.propTypes;
S1.propTypes = Text.propTypes;
S2.propTypes = Text.propTypes;
P1.propTypes = Text.propTypes;
P2.propTypes = Text.propTypes;
P3.propTypes = Text.propTypes;