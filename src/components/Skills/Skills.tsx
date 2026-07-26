import styles from "./Skills.module.css";
import { SKILL_GROUPS } from "../../data/skills";

export default function Skills() {
  return (
    <table className={styles.table}>
      <tbody>
        {SKILL_GROUPS.map(({ label, items }) => (
          <tr key={label}>
            <th className={styles.label} scope="row">
              {label}
            </th>
            <td className={styles.items}>{items.join(" · ")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
