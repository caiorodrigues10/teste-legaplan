"use client";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Checkbox } from "@/components/CheckBox";
import { Modal } from "@/components/Modal";
import { TextInput } from "@/components/TextInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import styles from "./cardListItems.module.scss";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
interface IListItemsProps {
  id: string;
  title: string;
  completed: boolean;
}

const schema = z.object({
  title: z.string().min(1, "Título é obrigatório"),
});

type FormCreateTask = z.infer<typeof schema>;

export function CardListItems() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [arrayItems, setArrayItems] = useState([] as IListItemsProps[]);
  const [id, setId] = useState("");

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<FormCreateTask>({ resolver: zodResolver(schema) });

  const onRemove = useCallback((id: string) => {
    setArrayItems((prevItems) => prevItems.filter((item) => item.id !== id));
    setId("");
    setIsOpenDelete(false);
  }, []);

  const onCheck = useCallback(
    (id: string) => {
      setArrayItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, completed: !item.completed } : item
        )
      );
    },
    [setArrayItems]
  );

  const onSubmit = useCallback(
    (data: FormCreateTask) => {
      const id = uuidv4();
      setArrayItems((prevItems) => [
        { completed: false, id, title: data.title },
        ...prevItems,
      ]);
      setIsOpen(false);
      reset();
    },
    [reset]
  );

  return (
    <>
      <Card size="sm">
        {arrayItems?.filter((e) => e.completed === false).length > 0 && (
          <h5 className={styles.titleCard}>Suas tarefas de hoje</h5>
        )}
        {arrayItems
          ?.filter((e) => e.completed === false)
          ?.map((e, index) => (
            <div
              className={styles.buttonList}
              key={index}
              onClick={() => onCheck(e.id)}
            >
              <Checkbox
                label={e.title}
                id={e.id}
                checked={e.completed}
                onChange={() => {
                  onCheck(e.id);
                }}
              />
              <button
                className={styles.iconTrash}
                onClick={() => {
                  setIsOpenDelete(true);
                  setId(e.id);
                }}
              >
                <Image
                  src={"/trash.svg"}
                  width={24}
                  height={24}
                  alt="Excluir tarefa"
                />
              </button>
            </div>
          ))}
        {arrayItems?.filter((e) => e.completed === true).length > 0 && (
          <h5 className={styles.titleCard}>Tarefas finalizadas</h5>
        )}
        {arrayItems
          ?.filter((e) => e.completed === true)
          ?.map((e, index) => (
            <div
              className={styles.buttonList}
              key={index}
              onClick={() => onCheck(e.id)}
            >
              <Checkbox
                label={e.title}
                id={e.id}
                checked={e.completed}
                onChange={() => {
                  onCheck(e.id);
                }}
              />
              <button
                className={styles.iconTrash}
                onClick={() => {
                  setIsOpenDelete(true);
                  setId(e.id);
                }}
              >
                <Image
                  src={"/trash.svg"}
                  width={24}
                  height={24}
                  alt="Excluir tarefa"
                />
              </button>
            </div>
          ))}
        <Button onClick={() => setIsOpen(true)}>Adicionar nova tarefa</Button>
      </Card>
      <Modal.Root
        size="sm"
        title="Nova tarefa"
        open={isOpen}
        onCloseModal={() => setIsOpen(false)}
      >
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <TextInput.Label description="Título:">
            <TextInput.Root>
              <TextInput.Content>
                <TextInput.Input {...register("title")} placeholder="Digite" />
              </TextInput.Content>
              <TextInput.Error
                isInvalid={!!errors.title}
                description={errors.title?.message}
              />
            </TextInput.Root>
          </TextInput.Label>
          <div className={styles.footer}>
            <Button
              variant="secondary"
              type="button"
              onClick={() => setIsOpen(false)}
            >
              Cancelar
            </Button>
            <Button type="submit">Adicionar</Button>
          </div>
        </form>
      </Modal.Root>
      <Modal.Root
        size="sm"
        title="Deletar tarefa"
        open={isOpenDelete}
        onCloseModal={() => {
          setIsOpenDelete(false);
          setId("");
        }}
      >
        <p className={styles.textConfirm}>
          Tem certeza que você deseja deletar essa tarefa?
        </p>
        <div className={styles.footer}>
          <Button
            variant="secondary"
            type="button"
            onClick={() => {
              setIsOpenDelete(false);
              setId("");
            }}
          >
            Cancelar
          </Button>
          <Button variant="danger" onClick={() => onRemove(id)}>
            Deletar
          </Button>
        </div>
      </Modal.Root>
    </>
  );
}
