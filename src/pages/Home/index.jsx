import Typography from "@mui/material/Typography";

const Home = () => {
  return (
    <div id="home-container">
      <header id="home-header">
        <Typography fontSize={55} color={"white"}>
          Naeem Malik
        </Typography>
      </header>
      <main id="home-main">
        <aside>
          <img
            src="../../../public/home-photo.jpg"
            alt="home-image"
            id="home-image"
          />
        </aside>
        <article style={{ wordWrap: "break-word" }}>
          <Typography variant="h3" color="initial" letterSpacing={5}>
            Website
          </Typography>
          <Typography variant="body1" color="initial" fontWeight={200}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, quo
            consequuntur, amet aperiam saepe, animi ducimus explicabo dolores
            soluta temporibus mollitia cumque nemo minus ab qui dolor! Totam,
            maxime ipsa.
          </Typography>
        </article>
      </main>
    </div>
  );
};

export default Home;
