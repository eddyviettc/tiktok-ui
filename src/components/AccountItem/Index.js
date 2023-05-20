import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/e8ff5949ceef4895162174eb814dffdd~c5_300x300.webp?x-expires=1683943200&x-signature=JVepT2xm3MQZtmYTqgLzltLymxg%3D"
                alt="..."
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>NguyenvanA</span>
            </div>
        </div>
    );
}

export default AccountItem;
