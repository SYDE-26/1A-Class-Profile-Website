import Button from '@mui/material/Button';
import './Footer.css'
import { ReactComponent as Heart } from './Heart.svg';

const Footer = ({ navBack, navForward }) => {
  let navBackID
  let navForwardID
  if (navBack === "Go back") {
    navBackID = "one"
  }
  if (navForward === "Go forward") {
    navForwardID = "two"
  }
  console.log(navBackID)
  return (
    <div className="body">
      <div style={{ height: "100vh", backgroundColor: "grey" }}></div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia non ut rerum ad, beatae quis inventore facere consectetur, ullam vero placeat voluptate temporibus aliquid nihil. Nihil iste aperiam eaque dicta?
      Fugit vel molestiae, rerum cumque aperiam optio commodi ipsa in doloremque necessitatibus suscipit facilis! Saepe nam, repellendus facere suscipit itaque ut labore enim sapiente! Odio quas dolore asperiores numquam blanditiis?
      Nisi, aspernatur nam? Explicabo laudantium asperiores cum fugiat sint nam maiores minus aspernatur. Aut iste facilis maiores veritatis itaque minus fuga, aspernatur exercitationem perspiciatis aliquam numquam consequuntur provident, quisquam rerum?
      Corrupti ipsum veritatis iure atque! Reiciendis itaque, provident ullam doloribus voluptate impedit, tempora veniam pariatur deleniti eum repellat porro et aperiam numquam ad repudiandae. Repudiandae quos voluptatem doloribus asperiores libero?
      Nam facere nihil aliquid blanditiis officiis corporis cupiditate quia, architecto nemo rerum repellat provident fugit velit voluptate voluptates dolore dignissimos unde quidem sint? Cum ut aspernatur minima facilis consequuntur maiores.
      Reiciendis eveniet vero distinctio modi animi iure assumenda optio minima sint impedit ipsam obcaecati rerum asperiores a, blanditiis, aspernatur sequi! Vel ab quibusdam sit pariatur iure odio eum facere aut?
      Impedit excepturi minus aut doloribus in unde nesciunt voluptates maiores quaerat dicta aspernatur, quam dignissimos saepe. Unde veniam temporibus veritatis ea minima! Possimus illum cumque reprehenderit alias porro, aliquam quae!
      Saepe esse cum quae eos ducimus modi cupiditate molestiae eligendi, similique adipisci dolorem non nihil minus nulla temporibus voluptatibus amet, laborum a perferendis. Aliquid suscipit dolor saepe at, harum assumenda!
      Possimus magnam impedit optio sit nihil delectus atque perspiciatis veritatis dignissimos voluptates quod harum quibusdam dolores quam, qui iure pariatur cumque vel doloremque deleniti molestiae dolor culpa recusandae. Nemo, eligendi!
      Quaerat magni minima quasi, non, atque, eaque eius maiores perferendis saepe totam amet. Doloribus, commodi et natus, sed hic iusto, nam nemo dolor magni minima consequuntur rem omnis aliquid recusandae.
      Sequi odio, vitae nam, deserunt, eveniet eius sit sed cupiditate similique labore facere rem cumque dolorum dolor ipsa fuga molestiae omnis neque reprehenderit quibusdam fugit consectetur quam repellat. Nobis, consequatur.
      Id cum temporibus illum nisi voluptatibus consequatur sint? Impedit totam reiciendis quo cum accusamus asperiores natus, iste aspernatur dolores quisquam recusandae, repellendus ab. Est, maxime vero. Voluptas vel quis harum?
      Ullam, laborum quo error exercitationem odio a incidunt eaque! Quia esse, ipsa veritatis non earum eaque. Excepturi, aliquam aliquid porro debitis officiis nemo itaque sed incidunt vitae quos repellendus quod?
      Velit, voluptate? Unde dignissimos id distinctio dolor dicta quod, exercitationem facere quo labore eos perferendis, sunt accusantium blanditiis hic autem inventore laborum esse? Nulla, incidunt quisquam esse laboriosam quam quos!
      Expedita, fugiat? Sit non mollitia voluptate ullam aspernatur aliquam cumque quasi explicabo commodi ipsam, quibusdam voluptates omnis? Neque excepturi placeat maxime? Necessitatibus magnam voluptas quis error velit. Cupiditate, numquam exercitationem?
      Sint dicta, corporis mollitia quidem tempore temporibus earum veniam praesentium, quae culpa cumque recusandae omnis et error alias nam. Expedita nihil cupiditate itaque maxime consectetur, omnis soluta aperiam! Odio, veritatis.
      Earum laudantium maiores non, ratione at animi ad, suscipit iure placeat impedit sequi cumque libero iusto voluptatem voluptates distinctio illum aliquid dolores, eligendi obcaecati. Possimus doloremque eum mollitia consequatur placeat.
      Praesentium, est. Odio impedit quae enim ipsa! Consectetur, commodi debitis? Saepe, quae error adipisci tenetur vitae nulla quod impedit at commodi voluptatibus, perferendis atque fuga nostrum unde, accusamus cupiditate modi.
      Voluptate, rerum nesciunt tempore cumque temporibus architecto ullam aliquam illum fuga asperiores ad veritatis sequi id tempora rem? Obcaecati asperiores aut qui deleniti ipsam dolores eveniet quidem ad pariatur quis.
      Numquam ex assumenda quia itaque praesentium quidem aspernatur culpa magni ratione nam exercitationem ea sed dolores illum voluptate excepturi labore fuga placeat soluta, facere eveniet inventore neque quibusdam. Sint, distinctio?
      <div className="Footer">
        <div className="NavigationalButtons">
          <div className="Wrapper" id={navBackID}>
            <Button sx={{
              backgroundColor: "#27313B",
              color: "white",
              padding: "16px",
              borderRadius: "18px"
            }} variant="outline">&larr; {navBack}</Button>
          </div>
          <div className="Wrapper" id={navForwardID}>
            <Button sx={{
              backgroundColor: "#27313B",
              color: "white",
              padding: "16px",
              borderRadius: "18px"
            }} variant="outline">{navForward} &rarr;</Button>
          </div>
        </div>
        <div className="CreatedBy">
          <p>Created with <Heart /> by SYDE 2026</p>
        </div>
        <div className="Wrapper" id="ScrollToTop">
          <Button onClick={topFunction} sx={{
            backgroundColor: "#27313B",
            color: "white",
            borderRadius: "18px"
          }} variant="outline">&uarr;</Button>
        </div>
      </div>
    </div>
  );
}

export default Footer;

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}