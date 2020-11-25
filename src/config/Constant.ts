/**
 * Created by fajar on 04/11/2018.
 *
 * Config for constant string property (not environment)
 */
export default Object.freeze({
    'KEY_USERNAME': 'KEY_USERNAME',
    'KEY_PASSWORD': 'KEY_PASSWORD',
    'KEY_CURRENT_LOGIN': 'KEY_CURRENT_LOGIN',
    'PREVIEW_FORMAT_DATE': 'D MMMM YYYY',
    'PREVIEW_SIMPLE_FORMAT_DATE': 'D-M-YYYY',
    'COMPLETE_FORMAT_DATE': 'D MMMM YYYY, hh:mm A',
    'POST_PUT_FORMAT_DATE': 'MMM DD, YYYY hh:mm:ss A',
    'SEARCH_FORMAT_DATE': 'YYYY-MM-D',
    'MONTH_NAME': 'MMMM',
    'ONE_SIGNAL_APP_ID': '',
    'ONE_SIGNAL_SAFARI_ID': '',
    'STATUS': {
        'ABSENS': {
            "H": "H",
            "S": "S",
            "I": "I",
            "A": "A",
            "T": "T",
            "B": "B",
            "D": "D",
        },
        'HTTP': {
            'UNAUTHORIZED': 401,
            'INTERNAL_SERVER_ERROR': 500
        },
        'API': {
            'DEFAULT_ERROR': '0000',

            'SAVE_SUCCESS': '0010',
            'UPDATE_SUCCESS': '0013',
            'DELETE_SUCCESS': '0014',
            'UPLOAD_SUCCESS': '0017',

            'LOGIN_SUCCESS': '1101',

            'OPERATION_COMPLETE': '1112',

            'SAVE_DATA_EXIST': '0011',
            'UPDATE_FAILED': '0012',
            'DELETE_FAILED': '0015',
            'UPLOAD_FAILED': '0016',
            'CONNECTION_FAILED': '0018',
            'SYSTEM_EXCEPTION': '0019',
            'DB_EXCEPTION': '0020',
            'DATA_NOT_FOUND': '0021',
            'DATA_EXCEED_LIMIT': '0022',
            'ILLEGAL_ACCESS': '0023',

            'LOGIN_FAILED': '1102',
            'PASSWORD_OR_USER_NOT_REGISTERED': '1103',
            'USER_EXIST': '1104',
            'SESSION_EXPIRED': '1105',
            'PASSWORD_NOT_VALID': '1106',
            'TOKEN_NOT_VALID': '1107',

            'INPUT_NOT_VALID': '1111',
            'OPERATION_FAILED': '1113',

            'MAIL_EXIST': '1201',
            'MAIL_NOT_FOUND': '1202',
            'USERNAME_EXIST': '1203',

            'VALID_CODE': '1301',
            'INVALID_CODE': '1302',
        }
    },
    'ROLES': {
        'ADMIN': 'ADMIN',
        'BENDAHARA': 'BENDAHARA',
        'SISWA': 'SISWA',
        'WALI': 'WALI',
    },
    'DAY': {
        'Minggu': 'Minggu',
        'Senin': 'Senin',
        'Selasa': 'Selasa',
        'Rabu': 'Rabu',
        'Kamis': 'Kamis',
        "Jum'at": "Jum'at",
        'Sabtu': 'Sabtu',
    },
    'COLORS': {
        'STATUS_ABSENS': {
            "H": "#23d160",
            "S": "#3F51B5",
            "I": "#3273dc",
            "A": "#ff3860",
            "T": "#ffdd57",
            "B": "#ff0005",
            "D": "#209cee",
            "NY": "#c4c4c4"
        }
    }
});
