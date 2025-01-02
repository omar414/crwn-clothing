import { BackgroundImage, Body, DirectoryItemContainer } from './dirctory-item.styles.jsx';
import { useNavigate } from 'react-router-dom';

const DirctoryItem = ({category}) =>{
    const {imageUrl,title, route}=category
    const navigate = useNavigate()

   const  onNavigateHandler = () => navigate(route)
    return(
        <DirectoryItemContainer onClick={onNavigateHandler}>
        <BackgroundImage
        imageUrl={imageUrl}
        />
        <Body>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </Body>
        </DirectoryItemContainer>
    )
}

export default DirctoryItem;