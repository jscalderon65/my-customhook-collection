import {
  useEffect,
  useState
} from "react";
const useOnSnapshotCollection = (ref) => {

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dataValues, setDataValues] = useState("");

  useEffect(() => {
    const unSubscribe =
      ref
      .onSnapshot(
        (snapshot) => {
          setLoading(false);
          setDataValues(
            snapshot.docs.map((item) => ({
              id: item.id,
              ...item.data()
            }))
          );
        },
        (err) => {
          setError(err);
        }
      );
    return () => unSubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setDataValues]);

  return [dataValues, error, loading];

};
const useOnSnapshotDoc = (ref) => {

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dataValues, setDataValues] = useState("");

  useEffect(() => {
    const unSubscribe =
      ref
      .onSnapshot(
        (snapshot) => {
          setLoading(false);
          setDataValues(
            snapshot.data()
          );
        },
        (err) => {
          setError(err);
        }
      );
    return () => unSubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setDataValues]);

  return [dataValues, error, loading];

};
export {
  useOnSnapshotCollection,
  useOnSnapshotDoc
};