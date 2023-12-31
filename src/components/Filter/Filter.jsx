import { useDispatch } from "react-redux";
import css from "./Filter.module.css";

import { setFilters } from "../../redux/filterSlice";

export const Filter = () => {
  const dispatch = useDispatch();
  const changeFilter = (e) => dispatch(setFilters(e.target.value));
  return (
    <div className={css.filter}>
      <label className={css.label}>
        <span>Find contacts by name</span>
        <input type="text" name="filter" onChange={changeFilter} />
      </label>
    </div>
  );
};
