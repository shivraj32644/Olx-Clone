import { Box, Heading, Skeleton } from '@chakra-ui/react'

export function SkelotonCard({loading}) {
//   const { data, loading, error } = useRemoteData()
//   if (error) return <Box children='error' />
  return (
    <Box>
      <Skeleton isLoaded={!loading}>
        <Heading>Loading</Heading>
      </Skeleton>
      <Skeleton isLoaded={!loading}>
        <Heading>Loading</Heading>
      </Skeleton>
      <Skeleton isLoaded={!loading}>
        <Heading>Loading</Heading>
      </Skeleton>
      <Skeleton isLoaded={!loading}>
        <Heading>Loading</Heading>
      </Skeleton>
      <Skeleton isLoaded={!loading}>
        <Heading>Loading</Heading>
      </Skeleton>
    </Box>
  )
}