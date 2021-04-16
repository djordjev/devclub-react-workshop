import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import { useQuery, useMutation } from "@apollo/react-hooks";

import allMembers from "../graphql/queries/allMembers";
import deleteMember from "../graphql/mutations/deleteMember";

import styles from "./styles.module.css";

const ListMembers = () => {
  // Hooks
  const { loading, error, data, refetch } = useQuery(allMembers);
  const [deleteCurrentMember] = useMutation(deleteMember);

  const onClick = () => {
    refetch({ variables: {} });
  };

  const onDelete = (id) => () => {
    deleteCurrentMember({
      variables: { id },
      refetchQueries: [{ query: allMembers }],
    });
  };

  if (loading) return <CircularProgress />;
  if (error) return <div>Error</div>;

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        All Dev club members
      </Typography>

      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.allMembers.map((member) => {
              return (
                <TableRow key={member.id}>
                  <TableCell>{member.id}</TableCell>
                  <TableCell>{member.name}</TableCell>
                  <TableCell>{member.position}</TableCell>
                  <TableCell>
                    <button
                      className={styles.delete}
                      onClick={onDelete(member.id)}
                      type="button"
                    >
                      <DeleteForeverIcon />
                    </button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <Container className={styles.btn} justify="center">
        <Button
          className={styles.button}
          color="primary"
          onClick={onClick}
          variant="contained"
        >
          Refresh
        </Button>
      </Container>
    </Container>
  );
};

export default ListMembers;
