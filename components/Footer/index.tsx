import links  from '@/utils/links'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="flex justify-center items-center gap-2 mx-auto py-8 mt-auto">
    {links.map(({ title, url, icon }: links) => (
      <a
        key={title}
        href={url}
        title={title}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-4 text-white text-sm opacity-50 transition ease-in-out duration-200 hover:opacity-100"
      >
        <Image
          src={icon}
          alt={title}
          height="24"
          width="24"
          className="transition ease-in-out duration-300 group-hover:opacity-100"
        />
      </a>
    ))}
  </footer>

  )
}

export default Footer
