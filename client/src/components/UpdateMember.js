import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { useMutation } from "@apollo/react-hooks";

import updateMember from "../graphql/mutations/updateMember";
import allMembers from "../graphql/queries/allMembers";

import styles from "./styles.module.css";

const UpdateMember = () => {
  // Hooks
  const [add] = useMutation(updateMember);

  const onSubmit = (e) => {
    e.preventDefault();

    const id = Number(e.currentTarget.id.value);
    const name = e.currentTarget.name.value;
    const position = e.currentTarget.position.value;

    add({
      variables: { id, name, position },
      refetchQueries: [{ query: allMembers }],
    });
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Update member
      </Typography>

      <Paper>
        <form
          className={styles.form}
          noValidate
          autoComplete="off"
          onSubmit={onSubmit}
        >
          <TextField id="id" label="ID" variant="outlined" margin="normal" />
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            margin="normal"
          />
          <TextField
            id="position"
            label="Position"
            variant="outlined"
            margin="normal"
          />
          <Button
            className={styles.button}
            color="primary"
            variant="contained"
            type="submit"
          >
            Update
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default UpdateMember;
