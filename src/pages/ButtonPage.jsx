import {
  GoBell,
  GoCloudDownload,
  GoCloudUpload,
  GoDatabase,
  GoComment,
} from 'react-icons/go';
import Button from '../components/Button';

function ButtonPage() {
  const handleClick = () => {};

  return (
    <div>
      <div>
        <Button success rounded onClick={handleClick}>
          <GoBell />
          click here
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloudDownload />
          click here
        </Button>
      </div>
      <div>
        <Button warning>
          <GoCloudUpload />
          click here
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoDatabase />
          click here
        </Button>
      </div>
      <div>
        <Button primary>
          <GoComment />
          click here
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
