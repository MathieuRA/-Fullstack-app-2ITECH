import './home.css'

export const Home = () => (
  <div className='jumbotron home'>
    <h1 className='display-4'>RAISIN Mathieu</h1>

    <p className='lead'>
      Développement d'une application fullstack. Petit
      projet réaliser dans le cursus de formation
      "Concepteur développeur web" de chez 2ItechAcademy
    </p>
    <hr className='my-4' />
    <p>
      Backend - Node.js avec Typescript
      <br />
      Base de donner - NOSQL avec MongoDB
      <br />
      Frontend - React.js avec JSX
    </p>
    <p className='lead'>
      <a
        className='btn btn-primary btn-lg'
        role='button'
        href={
          'https://github.com/MathieuRA/-Fullstack-app-2ITECH'
        }
        target={'_blank'}
      >
        Liens GITHUB
      </a>
    </p>
  </div>
)
