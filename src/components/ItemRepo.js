import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;
    h3 {
        font-size: 32px;
        color: #FAFAFA;
        word-wrap: break-word;
    }
    p {
        font-size:16px;
        color: #FAFAFA60;
        margin-bottom:20px;
    }
    a {
        background-color: #fff;
        padding: .5rem 1rem;
        border-radius: 10px;
        text-decoration: none;
        color: #000;
        margin-top:20px;
        font-size: 1.3rem;
        font-weight: 600;
    }
    hr {
        color: #FAFAFA60;
        margin: 20px 0;
    }
`

function ItemRepo({repo, handleRemoveRepo}) {

    const handleRemove = () => {
      handleRemoveRepo(repo.id)
    }
  
    return (
      <ItemContainer onClick={handleRemove}>
          <h3>{repo.name}</h3>
          <p>{repo.full_name}</p>
          <a href={repo.html_url} rel="noreferrer" target="_blank">Ver repositório</a><br />
          <hr />
      </ItemContainer>
    )
}
  
export default ItemRepo;