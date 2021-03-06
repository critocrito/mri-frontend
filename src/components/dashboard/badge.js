import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { view } from 'react-easy-state';
import { authStore } from '../../lib/store';
import { listData } from '../../data/testData';

class Badge extends React.Component {
  constructor(props) {
    super(props);
    this.setActiveBadge = this.setActiveBadge.bind(this);
  }

  setActiveBadge(e) {
    const dataset = e.target.dataset;
    authStore.activeList.title = dataset.title;
    authStore.activeList.slug = dataset.slug;
    authStore.activeList.size = dataset.size;
  }

  render() {
    const { badge } = this.props;
    const slug = badge.title.replace(' ', '').toLowerCase();
    const list =
      slug === 'projectproposals' || slug === 'personalstatements'
        ? 'forms'
        : slug;
    const size = _.size(listData[list].data);
    return (
      <div
        onClick={this.setActiveBadge}
        className={`badge pa3 flex flex-column justify-start items-center  pointer relative bg-light-gray mr3 ${
          authStore.activeList.slug === slug ? 'active' : ''
        }`}
        data-slug={slug}
        data-title={badge.title}
        data-size={size}
        id={slug}>
        <i className={`fa fa-${badge.icon} fa-3x mt3 mb1 gray`} />
        <div className="badgeValue">{size}</div>
        <div className="f4 gray t-shadow-light b">{badge.title}</div>
      </div>
    );
  }
}

Badge.propTypes = {
  badge: PropTypes.object.isRequired
};

export default view(Badge);
