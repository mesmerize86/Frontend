import React, {useState} from 'react';
import styled from 'styled-components/macro';
import SearchIcon from 'react-feather/dist/icons/search';
import { getPhotos } from '../../services/search/getPhotos';
import SearchResult from './searchResult';

const Search = () => {
  const [photos, setPhotos] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [previousKeyword, setPreviousKeyword] = useState('');
  const [hasResult, setResult] = useState(false);
  const [isLoading, setLoading] = useState(false);
  
  const handleSearchPhotos = async ()=> {
    setPreviousKeyword(searchKeyword);
    
    //if the search keyword is empty or search with same keyword, do not action
    if(searchKeyword === '' || searchKeyword === previousKeyword){
      return false;
    }
    setLoading(true);
    try {
      const response = await getPhotos(searchKeyword);
      const { payload } = response.data;
      setPhotos(payload);
      setResult(true);
      setLoading(false);
    } catch(error){
      setResult(false);
      setLoading(false);
    }
  }
  return (
    <Container>
      <SearchFormWrapper>
        <__SearchIcon onClick={handleSearchPhotos}/>
        <Input type="text" placeholder='search image' onChange={(e)=>setSearchKeyword(e.target.value)}/>
      </SearchFormWrapper>
      {isLoading && <LoadingText>Loading...</LoadingText>}
      {hasResult && <SearchResult photos={photos} />}
    </Container>
  );
}

export default Search;

const Container = styled.div`
  margin-top: 1rem;
`;

const SearchFormWrapper = styled.div`
  display: flex;
  border: 1px solid ${props => props.theme.colors.lightGray};
  border-radius: 8px;
`;

const Input = styled.input`
  width: calc(100% - 43px);
  padding: 0.625rem;
  margin-left: 0.625rem;
  text-align: center;
`;

const __SearchIcon = styled(SearchIcon)`
  cursor: pointer;
  position: relative;
  top: 0.625rem;
  left: 0.625rem;
`;

const LoadingText = styled.p`
  text-align: center;
  padding: 0.875rem;
`;