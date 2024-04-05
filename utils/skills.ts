type Skill = {
  id: number,
  name: string,
  icon: string,
  categoryId: number,
  background: boolean
}
const skills: Skill[] = [
  {
    id: 1,
    icon: '/assets/icons/file-type-typescript.svg',
    name: 'TypeScript',
    categoryId: 1,
    background: true
  },
  {
    id: 2,
    icon: '/assets/icons/file-type-light-js.svg',
    name: 'JavaScript',
    categoryId: 1,
    background: false
  },
  {
    id: 3,
    icon: '/assets/icons/file-type-light-next.svg',
    name: 'NextJS',
    categoryId: 2,
    background: true
  },
  {
    id: 4,
    icon: '/assets/icons/file-type-tailwind.svg',
    name: 'Tailwind CSS',
    categoryId: 2,
    background: false
  },
  {
    id: 5,
    icon: '/assets/icons/file-type-styled.svg',
    name: 'Styled Components',
    categoryId: 2,
    background: true,
  },
  {
    id: 6,
    icon: '/assets/icons/devops-2.svg',
    name: 'DevOps',
    categoryId: 3,
    background: true,
  },
  {
    id: 7,
    icon: '/assets/icons/amazon-web-services-aws.svg',
    name: 'AWS',
    categoryId: 3,
    background: false,
  },
  {
    id: 8,
    icon: '/assets/icons/githubactions.svg',
    name: 'CI/CD',
    categoryId: 3,
    background: true,
  },
  {
    id: 9,
    icon: '/assets/icons/git.svg',
    name: 'Git',
    categoryId: 3,
    background: false
  }
]

export default skills
