import { HandsClapping, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "../Avatar";

import styles from "./styles.module.css";

interface CommentProps {
  comment: {
    id: number;
    content: string;
  };
  onDeleteComment: (commentId: number) => void;
}

export function Comment({ comment, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(comment.id);
  }

  function handleLikeComment() {
    setLikeCount((state) => state + 1);
  }

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

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{comment.content}</p>

          <footer>
            <button onClick={handleLikeComment}>
              <HandsClapping size={20} />
              Aplaudir <span>{likeCount}</span>
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}
