import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  useColorModeValue, useDisclosure,Link
} from '@chakra-ui/react'
import * as React from 'react'
import Logo from '../ui/Logo'
import DrawerModal from './DrawerModal'



// opacity as='nav' olan boxa koyabilirsin
const Navbar = () => {

  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    <><Box

      as="section"
      pb={{
        base: '32',
        md: '24',
      }}
    >

    </Box>
      <Box
        zIndex={999}
        position={'fixed'}
        as="section"
        pb={{
          base: '12',
          md: '24',
        }}

      >


        <Box as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')} background={'#fafafa'} opacity='0.9' >
          <Container maxW='-moz-fit-content'
            py={{
              base: '4',
              lg: '5',
            }}
          >
            <HStack spacing="80" justify="space-between">
              <Link href='/syberio'>
                <Logo />
              </Link>
              {isDesktop ? (
                <Flex justify="space-between" flex="1" >
                  <ButtonGroup variant="ghost" spacing="12">
                    {['Product', 'Pricing', 'Resources', 'Support'].map((item) => (
                      <Button key={item}>{item} </Button>
                    ))}
                  </ButtonGroup>
                  <Container spacing="3"></Container>
                  <HStack spacing="3">
                    <Button fontWeight="bold" variant="ghost">Sign in</Button>
                    <Button colorScheme={'blue'}>Sign up</Button>
                  </HStack>
                </Flex>
              ) : (
                <DrawerModal />

              )}
            </HStack>
          </Container>
        </Box>
      </Box></>
  )
};

export default Navbar;