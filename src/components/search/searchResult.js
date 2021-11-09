import React, {useState, useEffect} from 'react';
import styled from 'styled-components/macro';

const SearchResult = ({photos}) => {
  const [showItems, setShowItems] = useState(8);
  const [showLoadMore, setShowLoadMore] = useState(photos.length > 8);
  const [hasPhotos, setPhotos] = useState(false);
  
  useEffect(()=> {
    if(photos.length > 1){
      setPhotos(true);
    } else {
      setPhotos(false);
    }
  },[photos]);
  const handleLoadMore = (e)=> {
    e.preventDefault();
    setShowItems(photos.length);
    setShowLoadMore(false);
  }
  
  return (
    <__SearchResult>
      {
        (!hasPhotos) ? <ResultLabel>No Results Found</ResultLabel> :
        photos.slice(0, showItems).map(photo => {
        const photoSource = photo.tags[0].source;
        return <ImageBlock key={photo.id}>
          <Image src={photo.urls.small} alt={photo.alt_description}/>
          {photoSource && <Label>{photo.tags[0].source.title}</Label>}
        </ImageBlock>
        })
      }
      {hasPhotos && <ResultLabel>{photos.length} found {
        showLoadMore && <a href="#" onClick={handleLoadMore}>Load more...</a>
      }</ResultLabel>}
    </__SearchResult>
  );
};

export default SearchResult;

const Label = styled.p`
  font-size: ${props => props.theme.fontSize.font_body_small};
`;

const ResultLabel = styled.p`
  font-size: ${props => props.theme.fontSize.font_body_small};
`;

const __SearchResult = styled.div`
  border: 1px solid ${props => props.theme.colors.lightGray};
  border-radius: 8px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.438rem;
  background-color: ${props => props.theme.colors.white};
  
  ${ResultLabel} {
    flex-basis: 100%;
    text-align: center;
  }
`;

const ImageBlock = styled.div`
  flex: 1 0 24%;
  text-align: center;
  padding: 0.75rem 0.313rem;
`;

const Image = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 8px;
  object-fit: cover;
`;