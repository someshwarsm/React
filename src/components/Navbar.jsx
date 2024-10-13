import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.div`
    height: 80px;
    // background-color: silver;
    align-items: center;
`

const Wrapper = styled.div`
    padding: 1px 20px;
    display: flex;
    justify-content: space-between;
`

const Left = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
`

const Language = styled.div`
    font-size: 14px;
    cursor: pointer;
    padding: 2px;
`
const SearchContainer = styled.div`
    border: 1px black;
    margin-left: 10px;
    display: flex;
    border: 1px solid black;
`

const Input = styled.input`
    border: none;
`

const Logo = styled.h2`
    font-weight: bold;
    text-align: center;
`

const Center = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    // text-align: center;   This will not work because of flex
`

const Right = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    // text-align: center;
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    padding: 5px;
`


const Navbar = () => {
  return (
    <div>
      <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input/>
                    <SearchIcon style={{color:"black", fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>
                    Shopping App
                </Logo>
            </Center>
            <Right>
                <MenuItem>
                    Register
                </MenuItem>
                <MenuItem>
                    Sign Up
                </MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlinedIcon />
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Navbar

