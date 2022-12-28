import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar";

import styles from "./styles.module.css";

interface CommentProps {
  content: string;
}

export function Comment({ content }: CommentProps) {
  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/goncadanilo.png" alt="Danilo Gonçalves" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Danilo Gonçalves</strong>
              <time
                title="26 de Dezembro às 15:30h"
                dateTime="2022-12-26 15:30:00"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>

          <footer>
            <button>
              <ThumbsUp size={20} />
              Aplaudir <span>20</span>
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}
