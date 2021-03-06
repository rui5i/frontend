"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var colors_1 = require("@material-ui/core/colors");
var React = __importStar(require("react"));
var typestyle_1 = require("typestyle");
var LineageCardRow_1 = require("./LineageCardRow");
var LineageCss_1 = require("./LineageCss");
var cardTitleBase = {
    borderTopLeftRadius: '4px',
    borderTopRightRadius: '4px',
    height: LineageCss_1.px(LineageCss_1.CARD_TITLE_BASE_HEIGHT),
};
var LineageCard = /** @class */ (function (_super) {
    __extends(LineageCard, _super);
    function LineageCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LineageCard.prototype.render = function () {
        var _a = this.props, title = _a.title, type = _a.type, rows = _a.rows, addSpacer = _a.addSpacer, isTarget = _a.isTarget, setLineageViewTarget = _a.setLineageViewTarget;
        var isExecution = type === 'execution';
        var css = typestyle_1.stylesheet({
            addSpacer: {
                marginTop: LineageCss_1.px(LineageCss_1.CARD_SPACER_HEIGHT),
            },
            cardContainer: {
                background: 'white',
                border: "1px solid " + colors_1.grey[300],
                borderRadius: LineageCss_1.px(LineageCss_1.CARD_RADIUS),
                $nest: {
                    h3: {
                        color: colors_1.blue[600],
                        fontFamily: 'PublicSans-Medium',
                        fontSize: '9px',
                        letterSpacing: '0.8px',
                        lineHeight: '42px',
                        paddingLeft: '15px',
                        textAlign: 'left',
                        textTransform: 'uppercase',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }
                }
            },
            cardTitle: __assign(__assign({}, cardTitleBase), { borderBottom: LineageCss_1.px(LineageCss_1.CARD_TITLE_BORDER_BOTTOM_HEIGHT) + " solid " + colors_1.grey[200] }),
            execution: {
                background: '#2C4A6D',
                border: '1px solid #CCE4FF',
                $nest: {
                    h3: {
                        color: '#5DC2B8',
                    },
                    '.cardRow': {
                        borderBottom: '1px solid var(--grey-700)',
                    },
                    '.cardRow .rowTitle': {
                        color: 'white',
                    },
                    '.cardRow .rowDesc': {
                        color: 'var(--grey-500)',
                    },
                    ".cardRow [class^='edge']": {
                        background: '#5DC2B8',
                    },
                },
            },
            executionCardTitle: __assign(__assign({}, cardTitleBase), { borderBottom: LineageCss_1.px(LineageCss_1.CARD_TITLE_BORDER_BOTTOM_HEIGHT) + " solid transparent" }),
            target: {
                border: "2px solid " + colors_1.blue[500],
            }
        });
        var listCardRows = function () { return rows.map(function (r, i) {
            return React.createElement(LineageCardRow_1.LineageCardRow, { key: i, typedResource: r.typedResource, resourceDetailsRoute: r.resourceDetailsPageRoute, leftAffordance: !!r.prev, rightAffordance: !!r.next, isLastRow: i === rows.length - 1, isTarget: isTarget, hideRadio: isExecution, setLineageViewTarget: setLineageViewTarget });
        }); };
        var cardContainerClasses = typestyle_1.classes(css.cardContainer, css[type], // css.execution
        addSpacer ? css.addSpacer : '', isTarget ? css.target : '');
        return (React.createElement("div", { className: cardContainerClasses },
            React.createElement("div", { className: typestyle_1.classes(isExecution ? css.executionCardTitle : css.cardTitle) },
                React.createElement("h3", { title: title }, title)),
            React.createElement("div", { className: 'cardBody' }, listCardRows())));
    };
    return LineageCard;
}(React.Component));
exports.LineageCard = LineageCard;
//# sourceMappingURL=LineageCard.js.map