import { Spin } from "antd";
import styles from "./index.less";

const Loading = ({ tip = "加载中..." }: { tip?: string }) => {
	return (
		<div className={styles.loadingWarp}>
			<Spin tip={tip} size="large" className="request-loading" />
		</div>
	);
};

export default Loading;
