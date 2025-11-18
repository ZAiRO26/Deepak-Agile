import React from 'react';
import { Helmet } from 'react-helmet-async';

type MetaProps = {
  title: string;
  description: string;
};

const Meta: React.FC<MetaProps> = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title} - Deepak Nailwal</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Meta;