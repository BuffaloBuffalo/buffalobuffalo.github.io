import React from 'react';
import renderer from 'react-test-renderer';
import { StaticQuery, useStaticQuery } from 'gatsby';
import IndexTemplate from './index-template';
import siteMetadata from '../../jest/__fixtures__/site-metadata';
import pageContext from '../../jest/__fixtures__/page-context';
import markdownRemark from '../../jest/__fixtures__/markdown-remark';

describe('IndexTemplate', () => {
  const props = {
    data: {
      ...markdownRemark
    },
    ...pageContext
  };

  beforeEach(() => {
    StaticQuery.mockImplementationOnce(
      ({ render }) => (
        render(siteMetadata)
      ),
      useStaticQuery.mockReturnValue(siteMetadata)
    );
  });

  it('renders correctly', () => {
    const tree = renderer.create(<IndexTemplate {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
