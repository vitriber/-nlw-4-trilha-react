import { useSession } from "next-auth/client"
import { useAuth } from "../hooks/useAuth"

interface ExerciseProps {
  level: number,
  currentExperience: number,
  challengesCompleted: number,
}

export default function Exercise(props: ExerciseProps): JSX.Element {
  const { level, currentExperience, challengesCompleted } = props

  const { signOut } = useAuth()

  const [session, loading] = useSession()
  return (

  )
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const cookies = context.req.cookies

  const { level, currentExperience, challengesCompleted } = cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
