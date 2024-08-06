FROM mrhansamala/XnxX.wa-Bot:fullcontrol

RUN git clone https://github.com/mrhansamala/XnxX.wa-Bot /root/xnxx
WORKDIR /root/xnxx/
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "xnxx.js"]
