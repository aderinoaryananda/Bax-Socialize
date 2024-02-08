import { Box, Button, Container, Input, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useRegister } from "../features/auth/hooks/useRegister";

export default function Register() {
  const { handleChange, handleRegister } = useRegister();

  return (
    <>
      <Container alignContent="center" mt="20">
        <Stack spacing={3}>
          <Text
            textAlign={"center"}
            fontSize="40px"
            fontWeight="bold"
            color="#04a51e"
          >
            BAX Socialize
          </Text>
          <Text textAlign={'center'} fontSize="20px">Create account BAX Socialize</Text>
          <Box alignContent={'center'} p={'1em'} display={'flex'} flexDirection={'column'} gap={'1em'} border={'1px solid gray'} boxShadow={'3px 2px 5px 2px gray'} borderRadius={'13px'}>
            <Input
              onChange={handleChange}
              boxShadow={'2px 1px 3px 1px gray'}
              bgColor={'whitesmoke'}
              name="full_name"
              variant="outline"
              placeholder="Full name*"
            />
            <Input
              onChange={handleChange}
              boxShadow={'2px 1px 3px 1px gray'}
              bgColor={'whitesmoke'}
              name="username"
              variant="outline"
              placeholder="Username*"
            />
            <Input
              onChange={handleChange}
              boxShadow={'2px 1px 3px 1px gray'}
              bgColor={'whitesmoke'}
              name="email"
              variant="outline"
              placeholder="Email*"
            />
            <Input
              onChange={handleChange}
              boxShadow={'2px 1px 3px 1px gray'}
              bgColor={'whitesmoke'}
              name="password"
              variant="outline"
              placeholder="Password*"
            />
            <Button
              onClick={handleRegister}
              boxShadow={'2px 1px 3px 1px gray'}
              borderRadius={50}
              bgColor="#04a51e"
            >
              Create
            </Button>
            <Box display={'flex'} flexDirection={'row'} justifyContent={'flex-end'}>
              <Text>Already have account?</Text>
            </Box>
            <Text color="#04a51e" display={'flex'} flexDirection={'row'} justifyContent={'flex-end'}>
              <Link to="/login">login</Link>
            </Text>
          </Box>
        </Stack>
      </Container>
    </>
  );
}
