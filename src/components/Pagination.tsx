import React, {FC} from 'react';
import styled from 'styled-components';
import  {  Pagination as AntPagination  } from  'antd';
import {PaginationProps} from 'antd/lib/pagination/Pagination'




const Pagination:FC<PaginationProps> = ({
                                          defaultCurrent,
                                          current,
                                          responsive,
                                          total,}) => {

  return (
    <Container>
      <AntPagination defaultCurrent={1} total={600} />
    </Container>
  );
};

export default Pagination;

const Container = styled.div`
align-self: center;
`