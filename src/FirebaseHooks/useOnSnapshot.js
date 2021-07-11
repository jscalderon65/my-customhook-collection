import {
  useEffect,
  useState,
  useRef
} from "react";
const useOnSnapshotCollection = (ref) => {
  const isMounted = useRef(true);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dataValues, setDataValues] = useState([]);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    const unSubscribe =
      ref
      .onSnapshot(
        (snapshot) => {
          if (isMounted.current) {
            setDataValues(
              snapshot.docs.map((item) => ({
                id: item.id,
                ...item.data()
              }))
              );
            setLoading(false);
          }
        },
        (err) => {
          setError(err);
        }
      );
    return () => {unSubscribe()};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setDataValues]);

  return [dataValues, loading, error];

};
const useOnSnapshotDoc = (ref) => {
  const isMounted = useRef(true);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dataValues, setDataValues] = useState([]);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);
  
  useEffect(() => {
    const unSubscribe =
      ref
      .onSnapshot(
        (snapshot) => {
          if (isMounted.current) {
            setLoading(false);
            setDataValues(
              snapshot.data()
            );
          }
        },
        (err) => {
          setError(err);
        }
      );
    return () => unSubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setDataValues]);

  return [dataValues, loading, error];

};
export {
  useOnSnapshotCollection,
  useOnSnapshotDoc
};