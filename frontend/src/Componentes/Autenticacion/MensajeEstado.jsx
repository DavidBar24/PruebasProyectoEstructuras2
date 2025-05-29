
import { AnimatePresence, motion } from "framer-motion";

export const MensajeEstado = ({ showSuccess, showError, errorMessage, nombre }) => {
  return (
    <AnimatePresence>
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="login-message success"
        >
          🐾 ¡Bienvenido {nombre}!
        </motion.div>
      )}
      {showError && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="login-message error"
        >
          {errorMessage}
        </motion.div>
      )}
    </AnimatePresence>
  );
};