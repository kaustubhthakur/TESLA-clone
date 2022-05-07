import React from 'react'
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu';
function Header() {
  return (
    <Container>
    <p>
      <a href="#">T E S L A</a>
    </p>
      <Menu>


<p> <a href="#">Model-S</a>    </p>
<p> <a href="#">Model-3</a> </p>
<p> <a href="#">Model-Y</a> </p>
<p> <a href="#">Model-X</a>   </p>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">ACCOUNT</a>
        <CustomMenu>

        </CustomMenu>

       
      </RightMenu>
    
    </Container>
  )
}

export default Header

const Container = styled.div`
min-height:60px;
position:fixed;
display:flex;
padding:0 20px;
align-items:center;
justify-content:space-between;
top:0;
left:0;
right:0;
p
{
  a
  {
    text-decoration:none;
    font-weight:100px;
    font-family:cursive;

  }
}





`
const Menu = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;

p{
  a
  {
    text-decoration:none;
  }
  font-weight:600;
  text-transform:uppercase;
  padding : 0 10px;
  flex-wrap:nowrap;
  text-decoration:none;

  @media(max-width:768px)
  {
    display:none;
  }
}
`
const RightMenu = styled.div`
display:flex;
align-items:center;
a
{
font-weight:600;
  text-transform:uppercase;
  margin-right:10px;
  padding : 0 10px;
  flex-wrap:nowrap;
  text-decoration:none;

}

`
const CustomMenu = styled(MenuIcon)`

cursor:pointer;
`