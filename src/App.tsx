import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Box = styled(motion.div)`
  height: 200px;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  cursor: pointer;
`;

const OverlayWindow = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const overlayVariants = {
  invisible: { backgroundColor: "rgba(0, 0, 0, 0)" },
  visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};

function App() {
  const [id, setId] = useState<string | null>(null);
  return (
    <Wrapper>
      <Grid>
        {["1", "2", "3", "4"].map((i) => (
          <Box onClick={() => setId(i)} key={i} layoutId={i}></Box>
        ))}
      </Grid>
      <AnimatePresence>
        {id ? (
          <OverlayWindow
            onClick={() => setId(null)}
            variants={overlayVariants}
            initial="invisible"
            animate="visible"
            exit="exit"
          >
            <Box style={{ width: 400, height: 200 }} layoutId={id}></Box>
          </OverlayWindow>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
